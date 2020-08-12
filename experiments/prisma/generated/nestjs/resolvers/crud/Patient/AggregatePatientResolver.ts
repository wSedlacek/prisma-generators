import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePatientArgs } from "./args/AggregatePatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass } from "class-transformer";
import { AggregatePatient } from "../../outputs/AggregatePatient";

@Resolver(() => Patient)
export class AggregatePatientResolver {
  @Query(() => AggregatePatient, {
    nullable: false,
    description: undefined
  })
  async aggregatePatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregatePatientArgs): Promise<AggregatePatient> {
    const transformFields = (fields: Record<string, any>): Record<string, any> => {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.patient.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}