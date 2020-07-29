import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePatientArgs } from "./args/AggregatePatientArgs";
import { CreatePatientArgs } from "./args/CreatePatientArgs";
import { DeleteManyPatientArgs } from "./args/DeleteManyPatientArgs";
import { DeletePatientArgs } from "./args/DeletePatientArgs";
import { FindManyPatientArgs } from "./args/FindManyPatientArgs";
import { FindOnePatientArgs } from "./args/FindOnePatientArgs";
import { UpdateManyPatientArgs } from "./args/UpdateManyPatientArgs";
import { UpdatePatientArgs } from "./args/UpdatePatientArgs";
import { UpsertPatientArgs } from "./args/UpsertPatientArgs";
import { Patient } from "../../../models/Patient";
import { AggregatePatient } from "../../outputs/AggregatePatient";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Patient)
export class PatientCrudResolver {
  @Query(() => Patient, {
    nullable: true,
    description: undefined
  })
  async patient(@Context() ctx: any, @Args() args: FindOnePatientArgs): Promise<Patient | undefined> {
    return ctx.prisma.patient.findOne(args);
  }

  @Query(() => [Patient], {
    nullable: false,
    description: undefined
  })
  async patients(@Context() ctx: any, @Args() args: FindManyPatientArgs): Promise<Patient[]> {
    return ctx.prisma.patient.findMany(args);
  }

  @Mutation(() => Patient, {
    nullable: false,
    description: undefined
  })
  async createPatient(@Context() ctx: any, @Args() args: CreatePatientArgs): Promise<Patient> {
    return ctx.prisma.patient.create(args);
  }

  @Mutation(() => Patient, {
    nullable: true,
    description: undefined
  })
  async deletePatient(@Context() ctx: any, @Args() args: DeletePatientArgs): Promise<Patient | undefined> {
    return ctx.prisma.patient.delete(args);
  }

  @Mutation(() => Patient, {
    nullable: true,
    description: undefined
  })
  async updatePatient(@Context() ctx: any, @Args() args: UpdatePatientArgs): Promise<Patient | undefined> {
    return ctx.prisma.patient.update(args);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPatient(@Context() ctx: any, @Args() args: DeleteManyPatientArgs): Promise<BatchPayload> {
    return ctx.prisma.patient.deleteMany(args);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPatient(@Context() ctx: any, @Args() args: UpdateManyPatientArgs): Promise<BatchPayload> {
    return ctx.prisma.patient.updateMany(args);
  }

  @Mutation(() => Patient, {
    nullable: false,
    description: undefined
  })
  async upsertPatient(@Context() ctx: any, @Args() args: UpsertPatientArgs): Promise<Patient> {
    return ctx.prisma.patient.upsert(args);
  }

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
