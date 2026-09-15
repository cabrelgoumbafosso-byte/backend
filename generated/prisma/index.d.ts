
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Demande
 * 
 */
export type Demande = $Result.DefaultSelection<Prisma.$DemandePayload>
/**
 * Model PiecesJointes
 * 
 */
export type PiecesJointes = $Result.DefaultSelection<Prisma.$PiecesJointesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CITOYEN: 'CITOYEN',
  GREFFIER: 'GREFFIER',
  PROCUREUR: 'PROCUREUR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatutDemande: {
  SOUMISE: 'SOUMISE',
  EN_VERIFICATION: 'EN_VERIFICATION',
  REJETEE: 'REJETEE',
  EN_ATTENTE_GREFFIER: 'EN_ATTENTE_GREFFIER',
  EN_ATTENTE_PROCUREUR: 'EN_ATTENTE_PROCUREUR',
  VALIDEE: 'VALIDEE',
  DELIVREE: 'DELIVREE'
};

export type StatutDemande = (typeof StatutDemande)[keyof typeof StatutDemande]


export const TypeBulletin: {
  BULLETIN_3: 'BULLETIN_3'
};

export type TypeBulletin = (typeof TypeBulletin)[keyof typeof TypeBulletin]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatutDemande = $Enums.StatutDemande

export const StatutDemande: typeof $Enums.StatutDemande

export type TypeBulletin = $Enums.TypeBulletin

export const TypeBulletin: typeof $Enums.TypeBulletin

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demande`: Exposes CRUD operations for the **Demande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demandes
    * const demandes = await prisma.demande.findMany()
    * ```
    */
  get demande(): Prisma.DemandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.piecesJointes`: Exposes CRUD operations for the **PiecesJointes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PiecesJointes
    * const piecesJointes = await prisma.piecesJointes.findMany()
    * ```
    */
  get piecesJointes(): Prisma.PiecesJointesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Demande: 'Demande',
    PiecesJointes: 'PiecesJointes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "demande" | "piecesJointes"
      txIsolationLevel: never
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsersFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsersAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Demande: {
        payload: Prisma.$DemandePayload<ExtArgs>
        fields: Prisma.DemandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findFirst: {
            args: Prisma.DemandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findMany: {
            args: Prisma.DemandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          create: {
            args: Prisma.DemandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          createMany: {
            args: Prisma.DemandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DemandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          update: {
            args: Prisma.DemandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          deleteMany: {
            args: Prisma.DemandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DemandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          aggregate: {
            args: Prisma.DemandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemande>
          }
          groupBy: {
            args: Prisma.DemandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DemandeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DemandeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DemandeCountArgs<ExtArgs>
            result: $Utils.Optional<DemandeCountAggregateOutputType> | number
          }
        }
      }
      PiecesJointes: {
        payload: Prisma.$PiecesJointesPayload<ExtArgs>
        fields: Prisma.PiecesJointesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PiecesJointesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecesJointesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PiecesJointesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecesJointesPayload>
          }
          findFirst: {
            args: Prisma.PiecesJointesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecesJointesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PiecesJointesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecesJointesPayload>
          }
          findMany: {
            args: Prisma.PiecesJointesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecesJointesPayload>[]
          }
          create: {
            args: Prisma.PiecesJointesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecesJointesPayload>
          }
          createMany: {
            args: Prisma.PiecesJointesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PiecesJointesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecesJointesPayload>
          }
          update: {
            args: Prisma.PiecesJointesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecesJointesPayload>
          }
          deleteMany: {
            args: Prisma.PiecesJointesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PiecesJointesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PiecesJointesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecesJointesPayload>
          }
          aggregate: {
            args: Prisma.PiecesJointesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePiecesJointes>
          }
          groupBy: {
            args: Prisma.PiecesJointesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PiecesJointesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PiecesJointesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PiecesJointesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PiecesJointesCountArgs<ExtArgs>
            result: $Utils.Optional<PiecesJointesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    demande?: DemandeOmit
    piecesJointes?: PiecesJointesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    demandes: number
    demandesTraitees: number
    demandesTraiteesProc: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandes?: boolean | UsersCountOutputTypeCountDemandesArgs
    demandesTraitees?: boolean | UsersCountOutputTypeCountDemandesTraiteesArgs
    demandesTraiteesProc?: boolean | UsersCountOutputTypeCountDemandesTraiteesProcArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDemandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDemandesTraiteesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDemandesTraiteesProcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }


  /**
   * Count Type DemandeCountOutputType
   */

  export type DemandeCountOutputType = {
    pieces: number
  }

  export type DemandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pieces?: boolean | DemandeCountOutputTypeCountPiecesArgs
  }

  // Custom InputTypes
  /**
   * DemandeCountOutputType without action
   */
  export type DemandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeCountOutputType
     */
    select?: DemandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DemandeCountOutputType without action
   */
  export type DemandeCountOutputTypeCountPiecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiecesJointesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    motDePasse: string | null
    telephone: string | null
    role: $Enums.Role | null
    refreshToken: string | null
    createdAt: Date | null
    signatureUrl: string | null
    cachetUrl: string | null
    tribunal: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    motDePasse: string | null
    telephone: string | null
    role: $Enums.Role | null
    refreshToken: string | null
    createdAt: Date | null
    signatureUrl: string | null
    cachetUrl: string | null
    tribunal: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    motDePasse: number
    telephone: number
    role: number
    refreshToken: number
    createdAt: number
    signatureUrl: number
    cachetUrl: number
    tribunal: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    motDePasse?: true
    telephone?: true
    role?: true
    refreshToken?: true
    createdAt?: true
    signatureUrl?: true
    cachetUrl?: true
    tribunal?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    motDePasse?: true
    telephone?: true
    role?: true
    refreshToken?: true
    createdAt?: true
    signatureUrl?: true
    cachetUrl?: true
    tribunal?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    motDePasse?: true
    telephone?: true
    role?: true
    refreshToken?: true
    createdAt?: true
    signatureUrl?: true
    cachetUrl?: true
    tribunal?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone: string | null
    role: $Enums.Role
    refreshToken: string | null
    createdAt: Date
    signatureUrl: string | null
    cachetUrl: string | null
    tribunal: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    motDePasse?: boolean
    telephone?: boolean
    role?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    signatureUrl?: boolean
    cachetUrl?: boolean
    tribunal?: boolean
    demandes?: boolean | Users$demandesArgs<ExtArgs>
    demandesTraitees?: boolean | Users$demandesTraiteesArgs<ExtArgs>
    demandesTraiteesProc?: boolean | Users$demandesTraiteesProcArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    motDePasse?: boolean
    telephone?: boolean
    role?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    signatureUrl?: boolean
    cachetUrl?: boolean
    tribunal?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "motDePasse" | "telephone" | "role" | "refreshToken" | "createdAt" | "signatureUrl" | "cachetUrl" | "tribunal", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandes?: boolean | Users$demandesArgs<ExtArgs>
    demandesTraitees?: boolean | Users$demandesTraiteesArgs<ExtArgs>
    demandesTraiteesProc?: boolean | Users$demandesTraiteesProcArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      demandes: Prisma.$DemandePayload<ExtArgs>[]
      demandesTraitees: Prisma.$DemandePayload<ExtArgs>[]
      demandesTraiteesProc: Prisma.$DemandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
      email: string
      motDePasse: string
      telephone: string | null
      role: $Enums.Role
      refreshToken: string | null
      createdAt: Date
      signatureUrl: string | null
      cachetUrl: string | null
      tribunal: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UsersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const users = await prisma.users.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UsersFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Users.
     * @param {UsersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const users = await prisma.users.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UsersAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demandes<T extends Users$demandesArgs<ExtArgs> = {}>(args?: Subset<T, Users$demandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demandesTraitees<T extends Users$demandesTraiteesArgs<ExtArgs> = {}>(args?: Subset<T, Users$demandesTraiteesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demandesTraiteesProc<T extends Users$demandesTraiteesProcArgs<ExtArgs> = {}>(args?: Subset<T, Users$demandesTraiteesProcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly nom: FieldRef<"Users", 'String'>
    readonly prenom: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly motDePasse: FieldRef<"Users", 'String'>
    readonly telephone: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly refreshToken: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly signatureUrl: FieldRef<"Users", 'String'>
    readonly cachetUrl: FieldRef<"Users", 'String'>
    readonly tribunal: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users findRaw
   */
  export type UsersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Users aggregateRaw
   */
  export type UsersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Users.demandes
   */
  export type Users$demandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Users.demandesTraitees
   */
  export type Users$demandesTraiteesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Users.demandesTraiteesProc
   */
  export type Users$demandesTraiteesProcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Demande
   */

  export type AggregateDemande = {
    _count: DemandeCountAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  export type DemandeMinAggregateOutputType = {
    id: string | null
    numeroDemande: string | null
    typeBulletin: $Enums.TypeBulletin | null
    statutDemande: $Enums.StatutDemande | null
    motif: string | null
    nom: string | null
    prenom: string | null
    dateNaisssance: Date | null
    lieuNaissance: string | null
    nomPere: string | null
    nomMere: string | null
    profession: string | null
    situationMatrimonial: string | null
    domicile: string | null
    nationalite: string | null
    userId: string | null
    greffierId: string | null
    dateSignatureGreffier: Date | null
    procureurId: string | null
    dateSignatureProcureur: Date | null
    creatAt: Date | null
  }

  export type DemandeMaxAggregateOutputType = {
    id: string | null
    numeroDemande: string | null
    typeBulletin: $Enums.TypeBulletin | null
    statutDemande: $Enums.StatutDemande | null
    motif: string | null
    nom: string | null
    prenom: string | null
    dateNaisssance: Date | null
    lieuNaissance: string | null
    nomPere: string | null
    nomMere: string | null
    profession: string | null
    situationMatrimonial: string | null
    domicile: string | null
    nationalite: string | null
    userId: string | null
    greffierId: string | null
    dateSignatureGreffier: Date | null
    procureurId: string | null
    dateSignatureProcureur: Date | null
    creatAt: Date | null
  }

  export type DemandeCountAggregateOutputType = {
    id: number
    numeroDemande: number
    typeBulletin: number
    statutDemande: number
    motif: number
    nom: number
    prenom: number
    dateNaisssance: number
    lieuNaissance: number
    nomPere: number
    nomMere: number
    profession: number
    situationMatrimonial: number
    domicile: number
    nationalite: number
    userId: number
    greffierId: number
    dateSignatureGreffier: number
    procureurId: number
    dateSignatureProcureur: number
    creatAt: number
    _all: number
  }


  export type DemandeMinAggregateInputType = {
    id?: true
    numeroDemande?: true
    typeBulletin?: true
    statutDemande?: true
    motif?: true
    nom?: true
    prenom?: true
    dateNaisssance?: true
    lieuNaissance?: true
    nomPere?: true
    nomMere?: true
    profession?: true
    situationMatrimonial?: true
    domicile?: true
    nationalite?: true
    userId?: true
    greffierId?: true
    dateSignatureGreffier?: true
    procureurId?: true
    dateSignatureProcureur?: true
    creatAt?: true
  }

  export type DemandeMaxAggregateInputType = {
    id?: true
    numeroDemande?: true
    typeBulletin?: true
    statutDemande?: true
    motif?: true
    nom?: true
    prenom?: true
    dateNaisssance?: true
    lieuNaissance?: true
    nomPere?: true
    nomMere?: true
    profession?: true
    situationMatrimonial?: true
    domicile?: true
    nationalite?: true
    userId?: true
    greffierId?: true
    dateSignatureGreffier?: true
    procureurId?: true
    dateSignatureProcureur?: true
    creatAt?: true
  }

  export type DemandeCountAggregateInputType = {
    id?: true
    numeroDemande?: true
    typeBulletin?: true
    statutDemande?: true
    motif?: true
    nom?: true
    prenom?: true
    dateNaisssance?: true
    lieuNaissance?: true
    nomPere?: true
    nomMere?: true
    profession?: true
    situationMatrimonial?: true
    domicile?: true
    nationalite?: true
    userId?: true
    greffierId?: true
    dateSignatureGreffier?: true
    procureurId?: true
    dateSignatureProcureur?: true
    creatAt?: true
    _all?: true
  }

  export type DemandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demande to aggregate.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demandes
    **/
    _count?: true | DemandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandeMaxAggregateInputType
  }

  export type GetDemandeAggregateType<T extends DemandeAggregateArgs> = {
        [P in keyof T & keyof AggregateDemande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemande[P]>
      : GetScalarType<T[P], AggregateDemande[P]>
  }




  export type DemandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithAggregationInput | DemandeOrderByWithAggregationInput[]
    by: DemandeScalarFieldEnum[] | DemandeScalarFieldEnum
    having?: DemandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandeCountAggregateInputType | true
    _min?: DemandeMinAggregateInputType
    _max?: DemandeMaxAggregateInputType
  }

  export type DemandeGroupByOutputType = {
    id: string
    numeroDemande: string
    typeBulletin: $Enums.TypeBulletin
    statutDemande: $Enums.StatutDemande
    motif: string | null
    nom: string
    prenom: string
    dateNaisssance: Date
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite: string
    userId: string
    greffierId: string | null
    dateSignatureGreffier: Date | null
    procureurId: string | null
    dateSignatureProcureur: Date | null
    creatAt: Date
    _count: DemandeCountAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  type GetDemandeGroupByPayload<T extends DemandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandeGroupByOutputType[P]>
            : GetScalarType<T[P], DemandeGroupByOutputType[P]>
        }
      >
    >


  export type DemandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroDemande?: boolean
    typeBulletin?: boolean
    statutDemande?: boolean
    motif?: boolean
    nom?: boolean
    prenom?: boolean
    dateNaisssance?: boolean
    lieuNaissance?: boolean
    nomPere?: boolean
    nomMere?: boolean
    profession?: boolean
    situationMatrimonial?: boolean
    domicile?: boolean
    nationalite?: boolean
    userId?: boolean
    greffierId?: boolean
    dateSignatureGreffier?: boolean
    procureurId?: boolean
    dateSignatureProcureur?: boolean
    creatAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    greffier?: boolean | Demande$greffierArgs<ExtArgs>
    procureur?: boolean | Demande$procureurArgs<ExtArgs>
    pieces?: boolean | Demande$piecesArgs<ExtArgs>
    _count?: boolean | DemandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>



  export type DemandeSelectScalar = {
    id?: boolean
    numeroDemande?: boolean
    typeBulletin?: boolean
    statutDemande?: boolean
    motif?: boolean
    nom?: boolean
    prenom?: boolean
    dateNaisssance?: boolean
    lieuNaissance?: boolean
    nomPere?: boolean
    nomMere?: boolean
    profession?: boolean
    situationMatrimonial?: boolean
    domicile?: boolean
    nationalite?: boolean
    userId?: boolean
    greffierId?: boolean
    dateSignatureGreffier?: boolean
    procureurId?: boolean
    dateSignatureProcureur?: boolean
    creatAt?: boolean
  }

  export type DemandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroDemande" | "typeBulletin" | "statutDemande" | "motif" | "nom" | "prenom" | "dateNaisssance" | "lieuNaissance" | "nomPere" | "nomMere" | "profession" | "situationMatrimonial" | "domicile" | "nationalite" | "userId" | "greffierId" | "dateSignatureGreffier" | "procureurId" | "dateSignatureProcureur" | "creatAt", ExtArgs["result"]["demande"]>
  export type DemandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    greffier?: boolean | Demande$greffierArgs<ExtArgs>
    procureur?: boolean | Demande$procureurArgs<ExtArgs>
    pieces?: boolean | Demande$piecesArgs<ExtArgs>
    _count?: boolean | DemandeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DemandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demande"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      greffier: Prisma.$UsersPayload<ExtArgs> | null
      procureur: Prisma.$UsersPayload<ExtArgs> | null
      pieces: Prisma.$PiecesJointesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numeroDemande: string
      typeBulletin: $Enums.TypeBulletin
      statutDemande: $Enums.StatutDemande
      motif: string | null
      nom: string
      prenom: string
      dateNaisssance: Date
      lieuNaissance: string
      nomPere: string
      nomMere: string
      profession: string
      situationMatrimonial: string
      domicile: string
      nationalite: string
      userId: string
      greffierId: string | null
      dateSignatureGreffier: Date | null
      procureurId: string | null
      dateSignatureProcureur: Date | null
      creatAt: Date
    }, ExtArgs["result"]["demande"]>
    composites: {}
  }

  type DemandeGetPayload<S extends boolean | null | undefined | DemandeDefaultArgs> = $Result.GetResult<Prisma.$DemandePayload, S>

  type DemandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandeCountAggregateInputType | true
    }

  export interface DemandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demande'], meta: { name: 'Demande' } }
    /**
     * Find zero or one Demande that matches the filter.
     * @param {DemandeFindUniqueArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandeFindUniqueArgs>(args: SelectSubset<T, DemandeFindUniqueArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandeFindUniqueOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandeFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandeFindFirstArgs>(args?: SelectSubset<T, DemandeFindFirstArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandeFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demandes
     * const demandes = await prisma.demande.findMany()
     * 
     * // Get first 10 Demandes
     * const demandes = await prisma.demande.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandeWithIdOnly = await prisma.demande.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemandeFindManyArgs>(args?: SelectSubset<T, DemandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demande.
     * @param {DemandeCreateArgs} args - Arguments to create a Demande.
     * @example
     * // Create one Demande
     * const Demande = await prisma.demande.create({
     *   data: {
     *     // ... data to create a Demande
     *   }
     * })
     * 
     */
    create<T extends DemandeCreateArgs>(args: SelectSubset<T, DemandeCreateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demandes.
     * @param {DemandeCreateManyArgs} args - Arguments to create many Demandes.
     * @example
     * // Create many Demandes
     * const demande = await prisma.demande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandeCreateManyArgs>(args?: SelectSubset<T, DemandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Demande.
     * @param {DemandeDeleteArgs} args - Arguments to delete one Demande.
     * @example
     * // Delete one Demande
     * const Demande = await prisma.demande.delete({
     *   where: {
     *     // ... filter to delete one Demande
     *   }
     * })
     * 
     */
    delete<T extends DemandeDeleteArgs>(args: SelectSubset<T, DemandeDeleteArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demande.
     * @param {DemandeUpdateArgs} args - Arguments to update one Demande.
     * @example
     * // Update one Demande
     * const demande = await prisma.demande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandeUpdateArgs>(args: SelectSubset<T, DemandeUpdateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demandes.
     * @param {DemandeDeleteManyArgs} args - Arguments to filter Demandes to delete.
     * @example
     * // Delete a few Demandes
     * const { count } = await prisma.demande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandeDeleteManyArgs>(args?: SelectSubset<T, DemandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demandes
     * const demande = await prisma.demande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandeUpdateManyArgs>(args: SelectSubset<T, DemandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Demande.
     * @param {DemandeUpsertArgs} args - Arguments to update or create a Demande.
     * @example
     * // Update or create a Demande
     * const demande = await prisma.demande.upsert({
     *   create: {
     *     // ... data to create a Demande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demande we want to update
     *   }
     * })
     */
    upsert<T extends DemandeUpsertArgs>(args: SelectSubset<T, DemandeUpsertArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandes that matches the filter.
     * @param {DemandeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const demande = await prisma.demande.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DemandeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Demande.
     * @param {DemandeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const demande = await prisma.demande.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DemandeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeCountArgs} args - Arguments to filter Demandes to count.
     * @example
     * // Count the number of Demandes
     * const count = await prisma.demande.count({
     *   where: {
     *     // ... the filter for the Demandes we want to count
     *   }
     * })
    **/
    count<T extends DemandeCountArgs>(
      args?: Subset<T, DemandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemandeAggregateArgs>(args: Subset<T, DemandeAggregateArgs>): Prisma.PrismaPromise<GetDemandeAggregateType<T>>

    /**
     * Group by Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandeGroupByArgs['orderBy'] }
        : { orderBy?: DemandeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demande model
   */
  readonly fields: DemandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    greffier<T extends Demande$greffierArgs<ExtArgs> = {}>(args?: Subset<T, Demande$greffierArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    procureur<T extends Demande$procureurArgs<ExtArgs> = {}>(args?: Subset<T, Demande$procureurArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pieces<T extends Demande$piecesArgs<ExtArgs> = {}>(args?: Subset<T, Demande$piecesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Demande model
   */
  interface DemandeFieldRefs {
    readonly id: FieldRef<"Demande", 'String'>
    readonly numeroDemande: FieldRef<"Demande", 'String'>
    readonly typeBulletin: FieldRef<"Demande", 'TypeBulletin'>
    readonly statutDemande: FieldRef<"Demande", 'StatutDemande'>
    readonly motif: FieldRef<"Demande", 'String'>
    readonly nom: FieldRef<"Demande", 'String'>
    readonly prenom: FieldRef<"Demande", 'String'>
    readonly dateNaisssance: FieldRef<"Demande", 'DateTime'>
    readonly lieuNaissance: FieldRef<"Demande", 'String'>
    readonly nomPere: FieldRef<"Demande", 'String'>
    readonly nomMere: FieldRef<"Demande", 'String'>
    readonly profession: FieldRef<"Demande", 'String'>
    readonly situationMatrimonial: FieldRef<"Demande", 'String'>
    readonly domicile: FieldRef<"Demande", 'String'>
    readonly nationalite: FieldRef<"Demande", 'String'>
    readonly userId: FieldRef<"Demande", 'String'>
    readonly greffierId: FieldRef<"Demande", 'String'>
    readonly dateSignatureGreffier: FieldRef<"Demande", 'DateTime'>
    readonly procureurId: FieldRef<"Demande", 'String'>
    readonly dateSignatureProcureur: FieldRef<"Demande", 'DateTime'>
    readonly creatAt: FieldRef<"Demande", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Demande findUnique
   */
  export type DemandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findUniqueOrThrow
   */
  export type DemandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findFirst
   */
  export type DemandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findFirstOrThrow
   */
  export type DemandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findMany
   */
  export type DemandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demandes to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande create
   */
  export type DemandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Demande.
     */
    data: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
  }

  /**
   * Demande createMany
   */
  export type DemandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demandes.
     */
    data: DemandeCreateManyInput | DemandeCreateManyInput[]
  }

  /**
   * Demande update
   */
  export type DemandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Demande.
     */
    data: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
    /**
     * Choose, which Demande to update.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande updateMany
   */
  export type DemandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demandes.
     */
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyInput>
    /**
     * Filter which Demandes to update
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to update.
     */
    limit?: number
  }

  /**
   * Demande upsert
   */
  export type DemandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Demande to update in case it exists.
     */
    where: DemandeWhereUniqueInput
    /**
     * In case the Demande found by the `where` argument doesn't exist, create a new Demande with this data.
     */
    create: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
    /**
     * In case the Demande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
  }

  /**
   * Demande delete
   */
  export type DemandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter which Demande to delete.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande deleteMany
   */
  export type DemandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demandes to delete
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to delete.
     */
    limit?: number
  }

  /**
   * Demande findRaw
   */
  export type DemandeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Demande aggregateRaw
   */
  export type DemandeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Demande.greffier
   */
  export type Demande$greffierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Demande.procureur
   */
  export type Demande$procureurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Demande.pieces
   */
  export type Demande$piecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    where?: PiecesJointesWhereInput
    orderBy?: PiecesJointesOrderByWithRelationInput | PiecesJointesOrderByWithRelationInput[]
    cursor?: PiecesJointesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PiecesJointesScalarFieldEnum | PiecesJointesScalarFieldEnum[]
  }

  /**
   * Demande without action
   */
  export type DemandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
  }


  /**
   * Model PiecesJointes
   */

  export type AggregatePiecesJointes = {
    _count: PiecesJointesCountAggregateOutputType | null
    _min: PiecesJointesMinAggregateOutputType | null
    _max: PiecesJointesMaxAggregateOutputType | null
  }

  export type PiecesJointesMinAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    demandeId: string | null
  }

  export type PiecesJointesMaxAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    demandeId: string | null
  }

  export type PiecesJointesCountAggregateOutputType = {
    id: number
    url: number
    type: number
    demandeId: number
    _all: number
  }


  export type PiecesJointesMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    demandeId?: true
  }

  export type PiecesJointesMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    demandeId?: true
  }

  export type PiecesJointesCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    demandeId?: true
    _all?: true
  }

  export type PiecesJointesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PiecesJointes to aggregate.
     */
    where?: PiecesJointesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiecesJointes to fetch.
     */
    orderBy?: PiecesJointesOrderByWithRelationInput | PiecesJointesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PiecesJointesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiecesJointes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiecesJointes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PiecesJointes
    **/
    _count?: true | PiecesJointesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PiecesJointesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PiecesJointesMaxAggregateInputType
  }

  export type GetPiecesJointesAggregateType<T extends PiecesJointesAggregateArgs> = {
        [P in keyof T & keyof AggregatePiecesJointes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiecesJointes[P]>
      : GetScalarType<T[P], AggregatePiecesJointes[P]>
  }




  export type PiecesJointesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiecesJointesWhereInput
    orderBy?: PiecesJointesOrderByWithAggregationInput | PiecesJointesOrderByWithAggregationInput[]
    by: PiecesJointesScalarFieldEnum[] | PiecesJointesScalarFieldEnum
    having?: PiecesJointesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PiecesJointesCountAggregateInputType | true
    _min?: PiecesJointesMinAggregateInputType
    _max?: PiecesJointesMaxAggregateInputType
  }

  export type PiecesJointesGroupByOutputType = {
    id: string
    url: string
    type: string
    demandeId: string
    _count: PiecesJointesCountAggregateOutputType | null
    _min: PiecesJointesMinAggregateOutputType | null
    _max: PiecesJointesMaxAggregateOutputType | null
  }

  type GetPiecesJointesGroupByPayload<T extends PiecesJointesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PiecesJointesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PiecesJointesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PiecesJointesGroupByOutputType[P]>
            : GetScalarType<T[P], PiecesJointesGroupByOutputType[P]>
        }
      >
    >


  export type PiecesJointesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    demandeId?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piecesJointes"]>



  export type PiecesJointesSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    demandeId?: boolean
  }

  export type PiecesJointesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "demandeId", ExtArgs["result"]["piecesJointes"]>
  export type PiecesJointesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }

  export type $PiecesJointesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PiecesJointes"
    objects: {
      demande: Prisma.$DemandePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      type: string
      demandeId: string
    }, ExtArgs["result"]["piecesJointes"]>
    composites: {}
  }

  type PiecesJointesGetPayload<S extends boolean | null | undefined | PiecesJointesDefaultArgs> = $Result.GetResult<Prisma.$PiecesJointesPayload, S>

  type PiecesJointesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PiecesJointesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PiecesJointesCountAggregateInputType | true
    }

  export interface PiecesJointesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PiecesJointes'], meta: { name: 'PiecesJointes' } }
    /**
     * Find zero or one PiecesJointes that matches the filter.
     * @param {PiecesJointesFindUniqueArgs} args - Arguments to find a PiecesJointes
     * @example
     * // Get one PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PiecesJointesFindUniqueArgs>(args: SelectSubset<T, PiecesJointesFindUniqueArgs<ExtArgs>>): Prisma__PiecesJointesClient<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PiecesJointes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PiecesJointesFindUniqueOrThrowArgs} args - Arguments to find a PiecesJointes
     * @example
     * // Get one PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PiecesJointesFindUniqueOrThrowArgs>(args: SelectSubset<T, PiecesJointesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PiecesJointesClient<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PiecesJointes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiecesJointesFindFirstArgs} args - Arguments to find a PiecesJointes
     * @example
     * // Get one PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PiecesJointesFindFirstArgs>(args?: SelectSubset<T, PiecesJointesFindFirstArgs<ExtArgs>>): Prisma__PiecesJointesClient<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PiecesJointes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiecesJointesFindFirstOrThrowArgs} args - Arguments to find a PiecesJointes
     * @example
     * // Get one PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PiecesJointesFindFirstOrThrowArgs>(args?: SelectSubset<T, PiecesJointesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PiecesJointesClient<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PiecesJointes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiecesJointesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.findMany()
     * 
     * // Get first 10 PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const piecesJointesWithIdOnly = await prisma.piecesJointes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PiecesJointesFindManyArgs>(args?: SelectSubset<T, PiecesJointesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PiecesJointes.
     * @param {PiecesJointesCreateArgs} args - Arguments to create a PiecesJointes.
     * @example
     * // Create one PiecesJointes
     * const PiecesJointes = await prisma.piecesJointes.create({
     *   data: {
     *     // ... data to create a PiecesJointes
     *   }
     * })
     * 
     */
    create<T extends PiecesJointesCreateArgs>(args: SelectSubset<T, PiecesJointesCreateArgs<ExtArgs>>): Prisma__PiecesJointesClient<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PiecesJointes.
     * @param {PiecesJointesCreateManyArgs} args - Arguments to create many PiecesJointes.
     * @example
     * // Create many PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PiecesJointesCreateManyArgs>(args?: SelectSubset<T, PiecesJointesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PiecesJointes.
     * @param {PiecesJointesDeleteArgs} args - Arguments to delete one PiecesJointes.
     * @example
     * // Delete one PiecesJointes
     * const PiecesJointes = await prisma.piecesJointes.delete({
     *   where: {
     *     // ... filter to delete one PiecesJointes
     *   }
     * })
     * 
     */
    delete<T extends PiecesJointesDeleteArgs>(args: SelectSubset<T, PiecesJointesDeleteArgs<ExtArgs>>): Prisma__PiecesJointesClient<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PiecesJointes.
     * @param {PiecesJointesUpdateArgs} args - Arguments to update one PiecesJointes.
     * @example
     * // Update one PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PiecesJointesUpdateArgs>(args: SelectSubset<T, PiecesJointesUpdateArgs<ExtArgs>>): Prisma__PiecesJointesClient<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PiecesJointes.
     * @param {PiecesJointesDeleteManyArgs} args - Arguments to filter PiecesJointes to delete.
     * @example
     * // Delete a few PiecesJointes
     * const { count } = await prisma.piecesJointes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PiecesJointesDeleteManyArgs>(args?: SelectSubset<T, PiecesJointesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PiecesJointes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiecesJointesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PiecesJointesUpdateManyArgs>(args: SelectSubset<T, PiecesJointesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PiecesJointes.
     * @param {PiecesJointesUpsertArgs} args - Arguments to update or create a PiecesJointes.
     * @example
     * // Update or create a PiecesJointes
     * const piecesJointes = await prisma.piecesJointes.upsert({
     *   create: {
     *     // ... data to create a PiecesJointes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PiecesJointes we want to update
     *   }
     * })
     */
    upsert<T extends PiecesJointesUpsertArgs>(args: SelectSubset<T, PiecesJointesUpsertArgs<ExtArgs>>): Prisma__PiecesJointesClient<$Result.GetResult<Prisma.$PiecesJointesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PiecesJointes that matches the filter.
     * @param {PiecesJointesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const piecesJointes = await prisma.piecesJointes.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PiecesJointesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PiecesJointes.
     * @param {PiecesJointesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const piecesJointes = await prisma.piecesJointes.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PiecesJointesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PiecesJointes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiecesJointesCountArgs} args - Arguments to filter PiecesJointes to count.
     * @example
     * // Count the number of PiecesJointes
     * const count = await prisma.piecesJointes.count({
     *   where: {
     *     // ... the filter for the PiecesJointes we want to count
     *   }
     * })
    **/
    count<T extends PiecesJointesCountArgs>(
      args?: Subset<T, PiecesJointesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PiecesJointesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PiecesJointes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiecesJointesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PiecesJointesAggregateArgs>(args: Subset<T, PiecesJointesAggregateArgs>): Prisma.PrismaPromise<GetPiecesJointesAggregateType<T>>

    /**
     * Group by PiecesJointes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiecesJointesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PiecesJointesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PiecesJointesGroupByArgs['orderBy'] }
        : { orderBy?: PiecesJointesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PiecesJointesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiecesJointesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PiecesJointes model
   */
  readonly fields: PiecesJointesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PiecesJointes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PiecesJointesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demande<T extends DemandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DemandeDefaultArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PiecesJointes model
   */
  interface PiecesJointesFieldRefs {
    readonly id: FieldRef<"PiecesJointes", 'String'>
    readonly url: FieldRef<"PiecesJointes", 'String'>
    readonly type: FieldRef<"PiecesJointes", 'String'>
    readonly demandeId: FieldRef<"PiecesJointes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PiecesJointes findUnique
   */
  export type PiecesJointesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    /**
     * Filter, which PiecesJointes to fetch.
     */
    where: PiecesJointesWhereUniqueInput
  }

  /**
   * PiecesJointes findUniqueOrThrow
   */
  export type PiecesJointesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    /**
     * Filter, which PiecesJointes to fetch.
     */
    where: PiecesJointesWhereUniqueInput
  }

  /**
   * PiecesJointes findFirst
   */
  export type PiecesJointesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    /**
     * Filter, which PiecesJointes to fetch.
     */
    where?: PiecesJointesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiecesJointes to fetch.
     */
    orderBy?: PiecesJointesOrderByWithRelationInput | PiecesJointesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PiecesJointes.
     */
    cursor?: PiecesJointesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiecesJointes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiecesJointes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PiecesJointes.
     */
    distinct?: PiecesJointesScalarFieldEnum | PiecesJointesScalarFieldEnum[]
  }

  /**
   * PiecesJointes findFirstOrThrow
   */
  export type PiecesJointesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    /**
     * Filter, which PiecesJointes to fetch.
     */
    where?: PiecesJointesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiecesJointes to fetch.
     */
    orderBy?: PiecesJointesOrderByWithRelationInput | PiecesJointesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PiecesJointes.
     */
    cursor?: PiecesJointesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiecesJointes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiecesJointes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PiecesJointes.
     */
    distinct?: PiecesJointesScalarFieldEnum | PiecesJointesScalarFieldEnum[]
  }

  /**
   * PiecesJointes findMany
   */
  export type PiecesJointesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    /**
     * Filter, which PiecesJointes to fetch.
     */
    where?: PiecesJointesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PiecesJointes to fetch.
     */
    orderBy?: PiecesJointesOrderByWithRelationInput | PiecesJointesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PiecesJointes.
     */
    cursor?: PiecesJointesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PiecesJointes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PiecesJointes.
     */
    skip?: number
    distinct?: PiecesJointesScalarFieldEnum | PiecesJointesScalarFieldEnum[]
  }

  /**
   * PiecesJointes create
   */
  export type PiecesJointesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    /**
     * The data needed to create a PiecesJointes.
     */
    data: XOR<PiecesJointesCreateInput, PiecesJointesUncheckedCreateInput>
  }

  /**
   * PiecesJointes createMany
   */
  export type PiecesJointesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PiecesJointes.
     */
    data: PiecesJointesCreateManyInput | PiecesJointesCreateManyInput[]
  }

  /**
   * PiecesJointes update
   */
  export type PiecesJointesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    /**
     * The data needed to update a PiecesJointes.
     */
    data: XOR<PiecesJointesUpdateInput, PiecesJointesUncheckedUpdateInput>
    /**
     * Choose, which PiecesJointes to update.
     */
    where: PiecesJointesWhereUniqueInput
  }

  /**
   * PiecesJointes updateMany
   */
  export type PiecesJointesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PiecesJointes.
     */
    data: XOR<PiecesJointesUpdateManyMutationInput, PiecesJointesUncheckedUpdateManyInput>
    /**
     * Filter which PiecesJointes to update
     */
    where?: PiecesJointesWhereInput
    /**
     * Limit how many PiecesJointes to update.
     */
    limit?: number
  }

  /**
   * PiecesJointes upsert
   */
  export type PiecesJointesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    /**
     * The filter to search for the PiecesJointes to update in case it exists.
     */
    where: PiecesJointesWhereUniqueInput
    /**
     * In case the PiecesJointes found by the `where` argument doesn't exist, create a new PiecesJointes with this data.
     */
    create: XOR<PiecesJointesCreateInput, PiecesJointesUncheckedCreateInput>
    /**
     * In case the PiecesJointes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PiecesJointesUpdateInput, PiecesJointesUncheckedUpdateInput>
  }

  /**
   * PiecesJointes delete
   */
  export type PiecesJointesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
    /**
     * Filter which PiecesJointes to delete.
     */
    where: PiecesJointesWhereUniqueInput
  }

  /**
   * PiecesJointes deleteMany
   */
  export type PiecesJointesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PiecesJointes to delete
     */
    where?: PiecesJointesWhereInput
    /**
     * Limit how many PiecesJointes to delete.
     */
    limit?: number
  }

  /**
   * PiecesJointes findRaw
   */
  export type PiecesJointesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PiecesJointes aggregateRaw
   */
  export type PiecesJointesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PiecesJointes without action
   */
  export type PiecesJointesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiecesJointes
     */
    select?: PiecesJointesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PiecesJointes
     */
    omit?: PiecesJointesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiecesJointesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UsersScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    motDePasse: 'motDePasse',
    telephone: 'telephone',
    role: 'role',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    signatureUrl: 'signatureUrl',
    cachetUrl: 'cachetUrl',
    tribunal: 'tribunal'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const DemandeScalarFieldEnum: {
    id: 'id',
    numeroDemande: 'numeroDemande',
    typeBulletin: 'typeBulletin',
    statutDemande: 'statutDemande',
    motif: 'motif',
    nom: 'nom',
    prenom: 'prenom',
    dateNaisssance: 'dateNaisssance',
    lieuNaissance: 'lieuNaissance',
    nomPere: 'nomPere',
    nomMere: 'nomMere',
    profession: 'profession',
    situationMatrimonial: 'situationMatrimonial',
    domicile: 'domicile',
    nationalite: 'nationalite',
    userId: 'userId',
    greffierId: 'greffierId',
    dateSignatureGreffier: 'dateSignatureGreffier',
    procureurId: 'procureurId',
    dateSignatureProcureur: 'dateSignatureProcureur',
    creatAt: 'creatAt'
  };

  export type DemandeScalarFieldEnum = (typeof DemandeScalarFieldEnum)[keyof typeof DemandeScalarFieldEnum]


  export const PiecesJointesScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    demandeId: 'demandeId'
  };

  export type PiecesJointesScalarFieldEnum = (typeof PiecesJointesScalarFieldEnum)[keyof typeof PiecesJointesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TypeBulletin'
   */
  export type EnumTypeBulletinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeBulletin'>
    


  /**
   * Reference to a field of type 'TypeBulletin[]'
   */
  export type ListEnumTypeBulletinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeBulletin[]'>
    


  /**
   * Reference to a field of type 'StatutDemande'
   */
  export type EnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande'>
    


  /**
   * Reference to a field of type 'StatutDemande[]'
   */
  export type ListEnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    nom?: StringFilter<"Users"> | string
    prenom?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    motDePasse?: StringFilter<"Users"> | string
    telephone?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    refreshToken?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    signatureUrl?: StringNullableFilter<"Users"> | string | null
    cachetUrl?: StringNullableFilter<"Users"> | string | null
    tribunal?: StringNullableFilter<"Users"> | string | null
    demandes?: DemandeListRelationFilter
    demandesTraitees?: DemandeListRelationFilter
    demandesTraiteesProc?: DemandeListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    signatureUrl?: SortOrder
    cachetUrl?: SortOrder
    tribunal?: SortOrder
    demandes?: DemandeOrderByRelationAggregateInput
    demandesTraitees?: DemandeOrderByRelationAggregateInput
    demandesTraiteesProc?: DemandeOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    nom?: StringFilter<"Users"> | string
    prenom?: StringFilter<"Users"> | string
    motDePasse?: StringFilter<"Users"> | string
    telephone?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    refreshToken?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    signatureUrl?: StringNullableFilter<"Users"> | string | null
    cachetUrl?: StringNullableFilter<"Users"> | string | null
    tribunal?: StringNullableFilter<"Users"> | string | null
    demandes?: DemandeListRelationFilter
    demandesTraitees?: DemandeListRelationFilter
    demandesTraiteesProc?: DemandeListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    signatureUrl?: SortOrder
    cachetUrl?: SortOrder
    tribunal?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    nom?: StringWithAggregatesFilter<"Users"> | string
    prenom?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    motDePasse?: StringWithAggregatesFilter<"Users"> | string
    telephone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    refreshToken?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    signatureUrl?: StringNullableWithAggregatesFilter<"Users"> | string | null
    cachetUrl?: StringNullableWithAggregatesFilter<"Users"> | string | null
    tribunal?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type DemandeWhereInput = {
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    id?: StringFilter<"Demande"> | string
    numeroDemande?: StringFilter<"Demande"> | string
    typeBulletin?: EnumTypeBulletinFilter<"Demande"> | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    motif?: StringNullableFilter<"Demande"> | string | null
    nom?: StringFilter<"Demande"> | string
    prenom?: StringFilter<"Demande"> | string
    dateNaisssance?: DateTimeFilter<"Demande"> | Date | string
    lieuNaissance?: StringFilter<"Demande"> | string
    nomPere?: StringFilter<"Demande"> | string
    nomMere?: StringFilter<"Demande"> | string
    profession?: StringFilter<"Demande"> | string
    situationMatrimonial?: StringFilter<"Demande"> | string
    domicile?: StringFilter<"Demande"> | string
    nationalite?: StringFilter<"Demande"> | string
    userId?: StringFilter<"Demande"> | string
    greffierId?: StringNullableFilter<"Demande"> | string | null
    dateSignatureGreffier?: DateTimeNullableFilter<"Demande"> | Date | string | null
    procureurId?: StringNullableFilter<"Demande"> | string | null
    dateSignatureProcureur?: DateTimeNullableFilter<"Demande"> | Date | string | null
    creatAt?: DateTimeFilter<"Demande"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    greffier?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    procureur?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    pieces?: PiecesJointesListRelationFilter
  }

  export type DemandeOrderByWithRelationInput = {
    id?: SortOrder
    numeroDemande?: SortOrder
    typeBulletin?: SortOrder
    statutDemande?: SortOrder
    motif?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaisssance?: SortOrder
    lieuNaissance?: SortOrder
    nomPere?: SortOrder
    nomMere?: SortOrder
    profession?: SortOrder
    situationMatrimonial?: SortOrder
    domicile?: SortOrder
    nationalite?: SortOrder
    userId?: SortOrder
    greffierId?: SortOrder
    dateSignatureGreffier?: SortOrder
    procureurId?: SortOrder
    dateSignatureProcureur?: SortOrder
    creatAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    greffier?: UsersOrderByWithRelationInput
    procureur?: UsersOrderByWithRelationInput
    pieces?: PiecesJointesOrderByRelationAggregateInput
  }

  export type DemandeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numeroDemande?: string
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    typeBulletin?: EnumTypeBulletinFilter<"Demande"> | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    motif?: StringNullableFilter<"Demande"> | string | null
    nom?: StringFilter<"Demande"> | string
    prenom?: StringFilter<"Demande"> | string
    dateNaisssance?: DateTimeFilter<"Demande"> | Date | string
    lieuNaissance?: StringFilter<"Demande"> | string
    nomPere?: StringFilter<"Demande"> | string
    nomMere?: StringFilter<"Demande"> | string
    profession?: StringFilter<"Demande"> | string
    situationMatrimonial?: StringFilter<"Demande"> | string
    domicile?: StringFilter<"Demande"> | string
    nationalite?: StringFilter<"Demande"> | string
    userId?: StringFilter<"Demande"> | string
    greffierId?: StringNullableFilter<"Demande"> | string | null
    dateSignatureGreffier?: DateTimeNullableFilter<"Demande"> | Date | string | null
    procureurId?: StringNullableFilter<"Demande"> | string | null
    dateSignatureProcureur?: DateTimeNullableFilter<"Demande"> | Date | string | null
    creatAt?: DateTimeFilter<"Demande"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    greffier?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    procureur?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    pieces?: PiecesJointesListRelationFilter
  }, "id" | "numeroDemande">

  export type DemandeOrderByWithAggregationInput = {
    id?: SortOrder
    numeroDemande?: SortOrder
    typeBulletin?: SortOrder
    statutDemande?: SortOrder
    motif?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaisssance?: SortOrder
    lieuNaissance?: SortOrder
    nomPere?: SortOrder
    nomMere?: SortOrder
    profession?: SortOrder
    situationMatrimonial?: SortOrder
    domicile?: SortOrder
    nationalite?: SortOrder
    userId?: SortOrder
    greffierId?: SortOrder
    dateSignatureGreffier?: SortOrder
    procureurId?: SortOrder
    dateSignatureProcureur?: SortOrder
    creatAt?: SortOrder
    _count?: DemandeCountOrderByAggregateInput
    _max?: DemandeMaxOrderByAggregateInput
    _min?: DemandeMinOrderByAggregateInput
  }

  export type DemandeScalarWhereWithAggregatesInput = {
    AND?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    OR?: DemandeScalarWhereWithAggregatesInput[]
    NOT?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Demande"> | string
    numeroDemande?: StringWithAggregatesFilter<"Demande"> | string
    typeBulletin?: EnumTypeBulletinWithAggregatesFilter<"Demande"> | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeWithAggregatesFilter<"Demande"> | $Enums.StatutDemande
    motif?: StringNullableWithAggregatesFilter<"Demande"> | string | null
    nom?: StringWithAggregatesFilter<"Demande"> | string
    prenom?: StringWithAggregatesFilter<"Demande"> | string
    dateNaisssance?: DateTimeWithAggregatesFilter<"Demande"> | Date | string
    lieuNaissance?: StringWithAggregatesFilter<"Demande"> | string
    nomPere?: StringWithAggregatesFilter<"Demande"> | string
    nomMere?: StringWithAggregatesFilter<"Demande"> | string
    profession?: StringWithAggregatesFilter<"Demande"> | string
    situationMatrimonial?: StringWithAggregatesFilter<"Demande"> | string
    domicile?: StringWithAggregatesFilter<"Demande"> | string
    nationalite?: StringWithAggregatesFilter<"Demande"> | string
    userId?: StringWithAggregatesFilter<"Demande"> | string
    greffierId?: StringNullableWithAggregatesFilter<"Demande"> | string | null
    dateSignatureGreffier?: DateTimeNullableWithAggregatesFilter<"Demande"> | Date | string | null
    procureurId?: StringNullableWithAggregatesFilter<"Demande"> | string | null
    dateSignatureProcureur?: DateTimeNullableWithAggregatesFilter<"Demande"> | Date | string | null
    creatAt?: DateTimeWithAggregatesFilter<"Demande"> | Date | string
  }

  export type PiecesJointesWhereInput = {
    AND?: PiecesJointesWhereInput | PiecesJointesWhereInput[]
    OR?: PiecesJointesWhereInput[]
    NOT?: PiecesJointesWhereInput | PiecesJointesWhereInput[]
    id?: StringFilter<"PiecesJointes"> | string
    url?: StringFilter<"PiecesJointes"> | string
    type?: StringFilter<"PiecesJointes"> | string
    demandeId?: StringFilter<"PiecesJointes"> | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
  }

  export type PiecesJointesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    demandeId?: SortOrder
    demande?: DemandeOrderByWithRelationInput
  }

  export type PiecesJointesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PiecesJointesWhereInput | PiecesJointesWhereInput[]
    OR?: PiecesJointesWhereInput[]
    NOT?: PiecesJointesWhereInput | PiecesJointesWhereInput[]
    url?: StringFilter<"PiecesJointes"> | string
    type?: StringFilter<"PiecesJointes"> | string
    demandeId?: StringFilter<"PiecesJointes"> | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
  }, "id">

  export type PiecesJointesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    demandeId?: SortOrder
    _count?: PiecesJointesCountOrderByAggregateInput
    _max?: PiecesJointesMaxOrderByAggregateInput
    _min?: PiecesJointesMinOrderByAggregateInput
  }

  export type PiecesJointesScalarWhereWithAggregatesInput = {
    AND?: PiecesJointesScalarWhereWithAggregatesInput | PiecesJointesScalarWhereWithAggregatesInput[]
    OR?: PiecesJointesScalarWhereWithAggregatesInput[]
    NOT?: PiecesJointesScalarWhereWithAggregatesInput | PiecesJointesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PiecesJointes"> | string
    url?: StringWithAggregatesFilter<"PiecesJointes"> | string
    type?: StringWithAggregatesFilter<"PiecesJointes"> | string
    demandeId?: StringWithAggregatesFilter<"PiecesJointes"> | string
  }

  export type UsersCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone?: string | null
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    signatureUrl?: string | null
    cachetUrl?: string | null
    tribunal?: string | null
    demandes?: DemandeCreateNestedManyWithoutUserInput
    demandesTraitees?: DemandeCreateNestedManyWithoutGreffierInput
    demandesTraiteesProc?: DemandeCreateNestedManyWithoutProcureurInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone?: string | null
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    signatureUrl?: string | null
    cachetUrl?: string | null
    tribunal?: string | null
    demandes?: DemandeUncheckedCreateNestedManyWithoutUserInput
    demandesTraitees?: DemandeUncheckedCreateNestedManyWithoutGreffierInput
    demandesTraiteesProc?: DemandeUncheckedCreateNestedManyWithoutProcureurInput
  }

  export type UsersUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
    demandes?: DemandeUpdateManyWithoutUserNestedInput
    demandesTraitees?: DemandeUpdateManyWithoutGreffierNestedInput
    demandesTraiteesProc?: DemandeUpdateManyWithoutProcureurNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
    demandes?: DemandeUncheckedUpdateManyWithoutUserNestedInput
    demandesTraitees?: DemandeUncheckedUpdateManyWithoutGreffierNestedInput
    demandesTraiteesProc?: DemandeUncheckedUpdateManyWithoutProcureurNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone?: string | null
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    signatureUrl?: string | null
    cachetUrl?: string | null
    tribunal?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandeCreateInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    dateSignatureGreffier?: Date | string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
    user: UsersCreateNestedOneWithoutDemandesInput
    greffier?: UsersCreateNestedOneWithoutDemandesTraiteesInput
    procureur?: UsersCreateNestedOneWithoutDemandesTraiteesProcInput
    pieces?: PiecesJointesCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUncheckedCreateInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    userId: string
    greffierId?: string | null
    dateSignatureGreffier?: Date | string | null
    procureurId?: string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
    pieces?: PiecesJointesUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUpdateInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutDemandesNestedInput
    greffier?: UsersUpdateOneWithoutDemandesTraiteesNestedInput
    procureur?: UsersUpdateOneWithoutDemandesTraiteesProcNestedInput
    pieces?: PiecesJointesUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    greffierId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procureurId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pieces?: PiecesJointesUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeCreateManyInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    userId: string
    greffierId?: string | null
    dateSignatureGreffier?: Date | string | null
    procureurId?: string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
  }

  export type DemandeUpdateManyMutationInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeUncheckedUpdateManyInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    greffierId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procureurId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiecesJointesCreateInput = {
    id?: string
    url: string
    type: string
    demande: DemandeCreateNestedOneWithoutPiecesInput
  }

  export type PiecesJointesUncheckedCreateInput = {
    id?: string
    url: string
    type: string
    demandeId: string
  }

  export type PiecesJointesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    demande?: DemandeUpdateOneRequiredWithoutPiecesNestedInput
  }

  export type PiecesJointesUncheckedUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    demandeId?: StringFieldUpdateOperationsInput | string
  }

  export type PiecesJointesCreateManyInput = {
    id?: string
    url: string
    type: string
    demandeId: string
  }

  export type PiecesJointesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PiecesJointesUncheckedUpdateManyInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    demandeId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DemandeListRelationFilter = {
    every?: DemandeWhereInput
    some?: DemandeWhereInput
    none?: DemandeWhereInput
  }

  export type DemandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    signatureUrl?: SortOrder
    cachetUrl?: SortOrder
    tribunal?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    signatureUrl?: SortOrder
    cachetUrl?: SortOrder
    tribunal?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    signatureUrl?: SortOrder
    cachetUrl?: SortOrder
    tribunal?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTypeBulletinFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeBulletin | EnumTypeBulletinFieldRefInput<$PrismaModel>
    in?: $Enums.TypeBulletin[] | ListEnumTypeBulletinFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeBulletin[] | ListEnumTypeBulletinFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeBulletinFilter<$PrismaModel> | $Enums.TypeBulletin
  }

  export type EnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type PiecesJointesListRelationFilter = {
    every?: PiecesJointesWhereInput
    some?: PiecesJointesWhereInput
    none?: PiecesJointesWhereInput
  }

  export type PiecesJointesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemandeCountOrderByAggregateInput = {
    id?: SortOrder
    numeroDemande?: SortOrder
    typeBulletin?: SortOrder
    statutDemande?: SortOrder
    motif?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaisssance?: SortOrder
    lieuNaissance?: SortOrder
    nomPere?: SortOrder
    nomMere?: SortOrder
    profession?: SortOrder
    situationMatrimonial?: SortOrder
    domicile?: SortOrder
    nationalite?: SortOrder
    userId?: SortOrder
    greffierId?: SortOrder
    dateSignatureGreffier?: SortOrder
    procureurId?: SortOrder
    dateSignatureProcureur?: SortOrder
    creatAt?: SortOrder
  }

  export type DemandeMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroDemande?: SortOrder
    typeBulletin?: SortOrder
    statutDemande?: SortOrder
    motif?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaisssance?: SortOrder
    lieuNaissance?: SortOrder
    nomPere?: SortOrder
    nomMere?: SortOrder
    profession?: SortOrder
    situationMatrimonial?: SortOrder
    domicile?: SortOrder
    nationalite?: SortOrder
    userId?: SortOrder
    greffierId?: SortOrder
    dateSignatureGreffier?: SortOrder
    procureurId?: SortOrder
    dateSignatureProcureur?: SortOrder
    creatAt?: SortOrder
  }

  export type DemandeMinOrderByAggregateInput = {
    id?: SortOrder
    numeroDemande?: SortOrder
    typeBulletin?: SortOrder
    statutDemande?: SortOrder
    motif?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaisssance?: SortOrder
    lieuNaissance?: SortOrder
    nomPere?: SortOrder
    nomMere?: SortOrder
    profession?: SortOrder
    situationMatrimonial?: SortOrder
    domicile?: SortOrder
    nationalite?: SortOrder
    userId?: SortOrder
    greffierId?: SortOrder
    dateSignatureGreffier?: SortOrder
    procureurId?: SortOrder
    dateSignatureProcureur?: SortOrder
    creatAt?: SortOrder
  }

  export type EnumTypeBulletinWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeBulletin | EnumTypeBulletinFieldRefInput<$PrismaModel>
    in?: $Enums.TypeBulletin[] | ListEnumTypeBulletinFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeBulletin[] | ListEnumTypeBulletinFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeBulletinWithAggregatesFilter<$PrismaModel> | $Enums.TypeBulletin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeBulletinFilter<$PrismaModel>
    _max?: NestedEnumTypeBulletinFilter<$PrismaModel>
  }

  export type EnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DemandeScalarRelationFilter = {
    is?: DemandeWhereInput
    isNot?: DemandeWhereInput
  }

  export type PiecesJointesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    demandeId?: SortOrder
  }

  export type PiecesJointesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    demandeId?: SortOrder
  }

  export type PiecesJointesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    demandeId?: SortOrder
  }

  export type DemandeCreateNestedManyWithoutUserInput = {
    create?: XOR<DemandeCreateWithoutUserInput, DemandeUncheckedCreateWithoutUserInput> | DemandeCreateWithoutUserInput[] | DemandeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutUserInput | DemandeCreateOrConnectWithoutUserInput[]
    createMany?: DemandeCreateManyUserInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DemandeCreateNestedManyWithoutGreffierInput = {
    create?: XOR<DemandeCreateWithoutGreffierInput, DemandeUncheckedCreateWithoutGreffierInput> | DemandeCreateWithoutGreffierInput[] | DemandeUncheckedCreateWithoutGreffierInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutGreffierInput | DemandeCreateOrConnectWithoutGreffierInput[]
    createMany?: DemandeCreateManyGreffierInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DemandeCreateNestedManyWithoutProcureurInput = {
    create?: XOR<DemandeCreateWithoutProcureurInput, DemandeUncheckedCreateWithoutProcureurInput> | DemandeCreateWithoutProcureurInput[] | DemandeUncheckedCreateWithoutProcureurInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutProcureurInput | DemandeCreateOrConnectWithoutProcureurInput[]
    createMany?: DemandeCreateManyProcureurInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DemandeCreateWithoutUserInput, DemandeUncheckedCreateWithoutUserInput> | DemandeCreateWithoutUserInput[] | DemandeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutUserInput | DemandeCreateOrConnectWithoutUserInput[]
    createMany?: DemandeCreateManyUserInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutGreffierInput = {
    create?: XOR<DemandeCreateWithoutGreffierInput, DemandeUncheckedCreateWithoutGreffierInput> | DemandeCreateWithoutGreffierInput[] | DemandeUncheckedCreateWithoutGreffierInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutGreffierInput | DemandeCreateOrConnectWithoutGreffierInput[]
    createMany?: DemandeCreateManyGreffierInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutProcureurInput = {
    create?: XOR<DemandeCreateWithoutProcureurInput, DemandeUncheckedCreateWithoutProcureurInput> | DemandeCreateWithoutProcureurInput[] | DemandeUncheckedCreateWithoutProcureurInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutProcureurInput | DemandeCreateOrConnectWithoutProcureurInput[]
    createMany?: DemandeCreateManyProcureurInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DemandeUpdateManyWithoutUserNestedInput = {
    create?: XOR<DemandeCreateWithoutUserInput, DemandeUncheckedCreateWithoutUserInput> | DemandeCreateWithoutUserInput[] | DemandeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutUserInput | DemandeCreateOrConnectWithoutUserInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutUserInput | DemandeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DemandeCreateManyUserInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutUserInput | DemandeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutUserInput | DemandeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type DemandeUpdateManyWithoutGreffierNestedInput = {
    create?: XOR<DemandeCreateWithoutGreffierInput, DemandeUncheckedCreateWithoutGreffierInput> | DemandeCreateWithoutGreffierInput[] | DemandeUncheckedCreateWithoutGreffierInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutGreffierInput | DemandeCreateOrConnectWithoutGreffierInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutGreffierInput | DemandeUpsertWithWhereUniqueWithoutGreffierInput[]
    createMany?: DemandeCreateManyGreffierInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutGreffierInput | DemandeUpdateWithWhereUniqueWithoutGreffierInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutGreffierInput | DemandeUpdateManyWithWhereWithoutGreffierInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type DemandeUpdateManyWithoutProcureurNestedInput = {
    create?: XOR<DemandeCreateWithoutProcureurInput, DemandeUncheckedCreateWithoutProcureurInput> | DemandeCreateWithoutProcureurInput[] | DemandeUncheckedCreateWithoutProcureurInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutProcureurInput | DemandeCreateOrConnectWithoutProcureurInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutProcureurInput | DemandeUpsertWithWhereUniqueWithoutProcureurInput[]
    createMany?: DemandeCreateManyProcureurInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutProcureurInput | DemandeUpdateWithWhereUniqueWithoutProcureurInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutProcureurInput | DemandeUpdateManyWithWhereWithoutProcureurInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DemandeCreateWithoutUserInput, DemandeUncheckedCreateWithoutUserInput> | DemandeCreateWithoutUserInput[] | DemandeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutUserInput | DemandeCreateOrConnectWithoutUserInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutUserInput | DemandeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DemandeCreateManyUserInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutUserInput | DemandeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutUserInput | DemandeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutGreffierNestedInput = {
    create?: XOR<DemandeCreateWithoutGreffierInput, DemandeUncheckedCreateWithoutGreffierInput> | DemandeCreateWithoutGreffierInput[] | DemandeUncheckedCreateWithoutGreffierInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutGreffierInput | DemandeCreateOrConnectWithoutGreffierInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutGreffierInput | DemandeUpsertWithWhereUniqueWithoutGreffierInput[]
    createMany?: DemandeCreateManyGreffierInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutGreffierInput | DemandeUpdateWithWhereUniqueWithoutGreffierInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutGreffierInput | DemandeUpdateManyWithWhereWithoutGreffierInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutProcureurNestedInput = {
    create?: XOR<DemandeCreateWithoutProcureurInput, DemandeUncheckedCreateWithoutProcureurInput> | DemandeCreateWithoutProcureurInput[] | DemandeUncheckedCreateWithoutProcureurInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutProcureurInput | DemandeCreateOrConnectWithoutProcureurInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutProcureurInput | DemandeUpsertWithWhereUniqueWithoutProcureurInput[]
    createMany?: DemandeCreateManyProcureurInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutProcureurInput | DemandeUpdateWithWhereUniqueWithoutProcureurInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutProcureurInput | DemandeUpdateManyWithWhereWithoutProcureurInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutDemandesInput = {
    create?: XOR<UsersCreateWithoutDemandesInput, UsersUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDemandesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutDemandesTraiteesInput = {
    create?: XOR<UsersCreateWithoutDemandesTraiteesInput, UsersUncheckedCreateWithoutDemandesTraiteesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDemandesTraiteesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutDemandesTraiteesProcInput = {
    create?: XOR<UsersCreateWithoutDemandesTraiteesProcInput, UsersUncheckedCreateWithoutDemandesTraiteesProcInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDemandesTraiteesProcInput
    connect?: UsersWhereUniqueInput
  }

  export type PiecesJointesCreateNestedManyWithoutDemandeInput = {
    create?: XOR<PiecesJointesCreateWithoutDemandeInput, PiecesJointesUncheckedCreateWithoutDemandeInput> | PiecesJointesCreateWithoutDemandeInput[] | PiecesJointesUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: PiecesJointesCreateOrConnectWithoutDemandeInput | PiecesJointesCreateOrConnectWithoutDemandeInput[]
    createMany?: PiecesJointesCreateManyDemandeInputEnvelope
    connect?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
  }

  export type PiecesJointesUncheckedCreateNestedManyWithoutDemandeInput = {
    create?: XOR<PiecesJointesCreateWithoutDemandeInput, PiecesJointesUncheckedCreateWithoutDemandeInput> | PiecesJointesCreateWithoutDemandeInput[] | PiecesJointesUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: PiecesJointesCreateOrConnectWithoutDemandeInput | PiecesJointesCreateOrConnectWithoutDemandeInput[]
    createMany?: PiecesJointesCreateManyDemandeInputEnvelope
    connect?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
  }

  export type EnumTypeBulletinFieldUpdateOperationsInput = {
    set?: $Enums.TypeBulletin
  }

  export type EnumStatutDemandeFieldUpdateOperationsInput = {
    set?: $Enums.StatutDemande
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UsersUpdateOneRequiredWithoutDemandesNestedInput = {
    create?: XOR<UsersCreateWithoutDemandesInput, UsersUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDemandesInput
    upsert?: UsersUpsertWithoutDemandesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDemandesInput, UsersUpdateWithoutDemandesInput>, UsersUncheckedUpdateWithoutDemandesInput>
  }

  export type UsersUpdateOneWithoutDemandesTraiteesNestedInput = {
    create?: XOR<UsersCreateWithoutDemandesTraiteesInput, UsersUncheckedCreateWithoutDemandesTraiteesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDemandesTraiteesInput
    upsert?: UsersUpsertWithoutDemandesTraiteesInput
    disconnect?: boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDemandesTraiteesInput, UsersUpdateWithoutDemandesTraiteesInput>, UsersUncheckedUpdateWithoutDemandesTraiteesInput>
  }

  export type UsersUpdateOneWithoutDemandesTraiteesProcNestedInput = {
    create?: XOR<UsersCreateWithoutDemandesTraiteesProcInput, UsersUncheckedCreateWithoutDemandesTraiteesProcInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDemandesTraiteesProcInput
    upsert?: UsersUpsertWithoutDemandesTraiteesProcInput
    disconnect?: boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDemandesTraiteesProcInput, UsersUpdateWithoutDemandesTraiteesProcInput>, UsersUncheckedUpdateWithoutDemandesTraiteesProcInput>
  }

  export type PiecesJointesUpdateManyWithoutDemandeNestedInput = {
    create?: XOR<PiecesJointesCreateWithoutDemandeInput, PiecesJointesUncheckedCreateWithoutDemandeInput> | PiecesJointesCreateWithoutDemandeInput[] | PiecesJointesUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: PiecesJointesCreateOrConnectWithoutDemandeInput | PiecesJointesCreateOrConnectWithoutDemandeInput[]
    upsert?: PiecesJointesUpsertWithWhereUniqueWithoutDemandeInput | PiecesJointesUpsertWithWhereUniqueWithoutDemandeInput[]
    createMany?: PiecesJointesCreateManyDemandeInputEnvelope
    set?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
    disconnect?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
    delete?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
    connect?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
    update?: PiecesJointesUpdateWithWhereUniqueWithoutDemandeInput | PiecesJointesUpdateWithWhereUniqueWithoutDemandeInput[]
    updateMany?: PiecesJointesUpdateManyWithWhereWithoutDemandeInput | PiecesJointesUpdateManyWithWhereWithoutDemandeInput[]
    deleteMany?: PiecesJointesScalarWhereInput | PiecesJointesScalarWhereInput[]
  }

  export type PiecesJointesUncheckedUpdateManyWithoutDemandeNestedInput = {
    create?: XOR<PiecesJointesCreateWithoutDemandeInput, PiecesJointesUncheckedCreateWithoutDemandeInput> | PiecesJointesCreateWithoutDemandeInput[] | PiecesJointesUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: PiecesJointesCreateOrConnectWithoutDemandeInput | PiecesJointesCreateOrConnectWithoutDemandeInput[]
    upsert?: PiecesJointesUpsertWithWhereUniqueWithoutDemandeInput | PiecesJointesUpsertWithWhereUniqueWithoutDemandeInput[]
    createMany?: PiecesJointesCreateManyDemandeInputEnvelope
    set?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
    disconnect?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
    delete?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
    connect?: PiecesJointesWhereUniqueInput | PiecesJointesWhereUniqueInput[]
    update?: PiecesJointesUpdateWithWhereUniqueWithoutDemandeInput | PiecesJointesUpdateWithWhereUniqueWithoutDemandeInput[]
    updateMany?: PiecesJointesUpdateManyWithWhereWithoutDemandeInput | PiecesJointesUpdateManyWithWhereWithoutDemandeInput[]
    deleteMany?: PiecesJointesScalarWhereInput | PiecesJointesScalarWhereInput[]
  }

  export type DemandeCreateNestedOneWithoutPiecesInput = {
    create?: XOR<DemandeCreateWithoutPiecesInput, DemandeUncheckedCreateWithoutPiecesInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutPiecesInput
    connect?: DemandeWhereUniqueInput
  }

  export type DemandeUpdateOneRequiredWithoutPiecesNestedInput = {
    create?: XOR<DemandeCreateWithoutPiecesInput, DemandeUncheckedCreateWithoutPiecesInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutPiecesInput
    upsert?: DemandeUpsertWithoutPiecesInput
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutPiecesInput, DemandeUpdateWithoutPiecesInput>, DemandeUncheckedUpdateWithoutPiecesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTypeBulletinFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeBulletin | EnumTypeBulletinFieldRefInput<$PrismaModel>
    in?: $Enums.TypeBulletin[] | ListEnumTypeBulletinFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeBulletin[] | ListEnumTypeBulletinFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeBulletinFilter<$PrismaModel> | $Enums.TypeBulletin
  }

  export type NestedEnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedEnumTypeBulletinWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeBulletin | EnumTypeBulletinFieldRefInput<$PrismaModel>
    in?: $Enums.TypeBulletin[] | ListEnumTypeBulletinFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeBulletin[] | ListEnumTypeBulletinFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeBulletinWithAggregatesFilter<$PrismaModel> | $Enums.TypeBulletin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeBulletinFilter<$PrismaModel>
    _max?: NestedEnumTypeBulletinFilter<$PrismaModel>
  }

  export type NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DemandeCreateWithoutUserInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    dateSignatureGreffier?: Date | string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
    greffier?: UsersCreateNestedOneWithoutDemandesTraiteesInput
    procureur?: UsersCreateNestedOneWithoutDemandesTraiteesProcInput
    pieces?: PiecesJointesCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutUserInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    greffierId?: string | null
    dateSignatureGreffier?: Date | string | null
    procureurId?: string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
    pieces?: PiecesJointesUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutUserInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutUserInput, DemandeUncheckedCreateWithoutUserInput>
  }

  export type DemandeCreateManyUserInputEnvelope = {
    data: DemandeCreateManyUserInput | DemandeCreateManyUserInput[]
  }

  export type DemandeCreateWithoutGreffierInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    dateSignatureGreffier?: Date | string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
    user: UsersCreateNestedOneWithoutDemandesInput
    procureur?: UsersCreateNestedOneWithoutDemandesTraiteesProcInput
    pieces?: PiecesJointesCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutGreffierInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    userId: string
    dateSignatureGreffier?: Date | string | null
    procureurId?: string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
    pieces?: PiecesJointesUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutGreffierInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutGreffierInput, DemandeUncheckedCreateWithoutGreffierInput>
  }

  export type DemandeCreateManyGreffierInputEnvelope = {
    data: DemandeCreateManyGreffierInput | DemandeCreateManyGreffierInput[]
  }

  export type DemandeCreateWithoutProcureurInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    dateSignatureGreffier?: Date | string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
    user: UsersCreateNestedOneWithoutDemandesInput
    greffier?: UsersCreateNestedOneWithoutDemandesTraiteesInput
    pieces?: PiecesJointesCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutProcureurInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    userId: string
    greffierId?: string | null
    dateSignatureGreffier?: Date | string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
    pieces?: PiecesJointesUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutProcureurInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutProcureurInput, DemandeUncheckedCreateWithoutProcureurInput>
  }

  export type DemandeCreateManyProcureurInputEnvelope = {
    data: DemandeCreateManyProcureurInput | DemandeCreateManyProcureurInput[]
  }

  export type DemandeUpsertWithWhereUniqueWithoutUserInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutUserInput, DemandeUncheckedUpdateWithoutUserInput>
    create: XOR<DemandeCreateWithoutUserInput, DemandeUncheckedCreateWithoutUserInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutUserInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutUserInput, DemandeUncheckedUpdateWithoutUserInput>
  }

  export type DemandeUpdateManyWithWhereWithoutUserInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutUserInput>
  }

  export type DemandeScalarWhereInput = {
    AND?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    OR?: DemandeScalarWhereInput[]
    NOT?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    id?: StringFilter<"Demande"> | string
    numeroDemande?: StringFilter<"Demande"> | string
    typeBulletin?: EnumTypeBulletinFilter<"Demande"> | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    motif?: StringNullableFilter<"Demande"> | string | null
    nom?: StringFilter<"Demande"> | string
    prenom?: StringFilter<"Demande"> | string
    dateNaisssance?: DateTimeFilter<"Demande"> | Date | string
    lieuNaissance?: StringFilter<"Demande"> | string
    nomPere?: StringFilter<"Demande"> | string
    nomMere?: StringFilter<"Demande"> | string
    profession?: StringFilter<"Demande"> | string
    situationMatrimonial?: StringFilter<"Demande"> | string
    domicile?: StringFilter<"Demande"> | string
    nationalite?: StringFilter<"Demande"> | string
    userId?: StringFilter<"Demande"> | string
    greffierId?: StringNullableFilter<"Demande"> | string | null
    dateSignatureGreffier?: DateTimeNullableFilter<"Demande"> | Date | string | null
    procureurId?: StringNullableFilter<"Demande"> | string | null
    dateSignatureProcureur?: DateTimeNullableFilter<"Demande"> | Date | string | null
    creatAt?: DateTimeFilter<"Demande"> | Date | string
  }

  export type DemandeUpsertWithWhereUniqueWithoutGreffierInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutGreffierInput, DemandeUncheckedUpdateWithoutGreffierInput>
    create: XOR<DemandeCreateWithoutGreffierInput, DemandeUncheckedCreateWithoutGreffierInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutGreffierInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutGreffierInput, DemandeUncheckedUpdateWithoutGreffierInput>
  }

  export type DemandeUpdateManyWithWhereWithoutGreffierInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutGreffierInput>
  }

  export type DemandeUpsertWithWhereUniqueWithoutProcureurInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutProcureurInput, DemandeUncheckedUpdateWithoutProcureurInput>
    create: XOR<DemandeCreateWithoutProcureurInput, DemandeUncheckedCreateWithoutProcureurInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutProcureurInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutProcureurInput, DemandeUncheckedUpdateWithoutProcureurInput>
  }

  export type DemandeUpdateManyWithWhereWithoutProcureurInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutProcureurInput>
  }

  export type UsersCreateWithoutDemandesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone?: string | null
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    signatureUrl?: string | null
    cachetUrl?: string | null
    tribunal?: string | null
    demandesTraitees?: DemandeCreateNestedManyWithoutGreffierInput
    demandesTraiteesProc?: DemandeCreateNestedManyWithoutProcureurInput
  }

  export type UsersUncheckedCreateWithoutDemandesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone?: string | null
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    signatureUrl?: string | null
    cachetUrl?: string | null
    tribunal?: string | null
    demandesTraitees?: DemandeUncheckedCreateNestedManyWithoutGreffierInput
    demandesTraiteesProc?: DemandeUncheckedCreateNestedManyWithoutProcureurInput
  }

  export type UsersCreateOrConnectWithoutDemandesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDemandesInput, UsersUncheckedCreateWithoutDemandesInput>
  }

  export type UsersCreateWithoutDemandesTraiteesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone?: string | null
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    signatureUrl?: string | null
    cachetUrl?: string | null
    tribunal?: string | null
    demandes?: DemandeCreateNestedManyWithoutUserInput
    demandesTraiteesProc?: DemandeCreateNestedManyWithoutProcureurInput
  }

  export type UsersUncheckedCreateWithoutDemandesTraiteesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone?: string | null
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    signatureUrl?: string | null
    cachetUrl?: string | null
    tribunal?: string | null
    demandes?: DemandeUncheckedCreateNestedManyWithoutUserInput
    demandesTraiteesProc?: DemandeUncheckedCreateNestedManyWithoutProcureurInput
  }

  export type UsersCreateOrConnectWithoutDemandesTraiteesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDemandesTraiteesInput, UsersUncheckedCreateWithoutDemandesTraiteesInput>
  }

  export type UsersCreateWithoutDemandesTraiteesProcInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone?: string | null
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    signatureUrl?: string | null
    cachetUrl?: string | null
    tribunal?: string | null
    demandes?: DemandeCreateNestedManyWithoutUserInput
    demandesTraitees?: DemandeCreateNestedManyWithoutGreffierInput
  }

  export type UsersUncheckedCreateWithoutDemandesTraiteesProcInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    motDePasse: string
    telephone?: string | null
    role?: $Enums.Role
    refreshToken?: string | null
    createdAt?: Date | string
    signatureUrl?: string | null
    cachetUrl?: string | null
    tribunal?: string | null
    demandes?: DemandeUncheckedCreateNestedManyWithoutUserInput
    demandesTraitees?: DemandeUncheckedCreateNestedManyWithoutGreffierInput
  }

  export type UsersCreateOrConnectWithoutDemandesTraiteesProcInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDemandesTraiteesProcInput, UsersUncheckedCreateWithoutDemandesTraiteesProcInput>
  }

  export type PiecesJointesCreateWithoutDemandeInput = {
    id?: string
    url: string
    type: string
  }

  export type PiecesJointesUncheckedCreateWithoutDemandeInput = {
    id?: string
    url: string
    type: string
  }

  export type PiecesJointesCreateOrConnectWithoutDemandeInput = {
    where: PiecesJointesWhereUniqueInput
    create: XOR<PiecesJointesCreateWithoutDemandeInput, PiecesJointesUncheckedCreateWithoutDemandeInput>
  }

  export type PiecesJointesCreateManyDemandeInputEnvelope = {
    data: PiecesJointesCreateManyDemandeInput | PiecesJointesCreateManyDemandeInput[]
  }

  export type UsersUpsertWithoutDemandesInput = {
    update: XOR<UsersUpdateWithoutDemandesInput, UsersUncheckedUpdateWithoutDemandesInput>
    create: XOR<UsersCreateWithoutDemandesInput, UsersUncheckedCreateWithoutDemandesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDemandesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDemandesInput, UsersUncheckedUpdateWithoutDemandesInput>
  }

  export type UsersUpdateWithoutDemandesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
    demandesTraitees?: DemandeUpdateManyWithoutGreffierNestedInput
    demandesTraiteesProc?: DemandeUpdateManyWithoutProcureurNestedInput
  }

  export type UsersUncheckedUpdateWithoutDemandesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
    demandesTraitees?: DemandeUncheckedUpdateManyWithoutGreffierNestedInput
    demandesTraiteesProc?: DemandeUncheckedUpdateManyWithoutProcureurNestedInput
  }

  export type UsersUpsertWithoutDemandesTraiteesInput = {
    update: XOR<UsersUpdateWithoutDemandesTraiteesInput, UsersUncheckedUpdateWithoutDemandesTraiteesInput>
    create: XOR<UsersCreateWithoutDemandesTraiteesInput, UsersUncheckedCreateWithoutDemandesTraiteesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDemandesTraiteesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDemandesTraiteesInput, UsersUncheckedUpdateWithoutDemandesTraiteesInput>
  }

  export type UsersUpdateWithoutDemandesTraiteesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
    demandes?: DemandeUpdateManyWithoutUserNestedInput
    demandesTraiteesProc?: DemandeUpdateManyWithoutProcureurNestedInput
  }

  export type UsersUncheckedUpdateWithoutDemandesTraiteesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
    demandes?: DemandeUncheckedUpdateManyWithoutUserNestedInput
    demandesTraiteesProc?: DemandeUncheckedUpdateManyWithoutProcureurNestedInput
  }

  export type UsersUpsertWithoutDemandesTraiteesProcInput = {
    update: XOR<UsersUpdateWithoutDemandesTraiteesProcInput, UsersUncheckedUpdateWithoutDemandesTraiteesProcInput>
    create: XOR<UsersCreateWithoutDemandesTraiteesProcInput, UsersUncheckedCreateWithoutDemandesTraiteesProcInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDemandesTraiteesProcInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDemandesTraiteesProcInput, UsersUncheckedUpdateWithoutDemandesTraiteesProcInput>
  }

  export type UsersUpdateWithoutDemandesTraiteesProcInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
    demandes?: DemandeUpdateManyWithoutUserNestedInput
    demandesTraitees?: DemandeUpdateManyWithoutGreffierNestedInput
  }

  export type UsersUncheckedUpdateWithoutDemandesTraiteesProcInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cachetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tribunal?: NullableStringFieldUpdateOperationsInput | string | null
    demandes?: DemandeUncheckedUpdateManyWithoutUserNestedInput
    demandesTraitees?: DemandeUncheckedUpdateManyWithoutGreffierNestedInput
  }

  export type PiecesJointesUpsertWithWhereUniqueWithoutDemandeInput = {
    where: PiecesJointesWhereUniqueInput
    update: XOR<PiecesJointesUpdateWithoutDemandeInput, PiecesJointesUncheckedUpdateWithoutDemandeInput>
    create: XOR<PiecesJointesCreateWithoutDemandeInput, PiecesJointesUncheckedCreateWithoutDemandeInput>
  }

  export type PiecesJointesUpdateWithWhereUniqueWithoutDemandeInput = {
    where: PiecesJointesWhereUniqueInput
    data: XOR<PiecesJointesUpdateWithoutDemandeInput, PiecesJointesUncheckedUpdateWithoutDemandeInput>
  }

  export type PiecesJointesUpdateManyWithWhereWithoutDemandeInput = {
    where: PiecesJointesScalarWhereInput
    data: XOR<PiecesJointesUpdateManyMutationInput, PiecesJointesUncheckedUpdateManyWithoutDemandeInput>
  }

  export type PiecesJointesScalarWhereInput = {
    AND?: PiecesJointesScalarWhereInput | PiecesJointesScalarWhereInput[]
    OR?: PiecesJointesScalarWhereInput[]
    NOT?: PiecesJointesScalarWhereInput | PiecesJointesScalarWhereInput[]
    id?: StringFilter<"PiecesJointes"> | string
    url?: StringFilter<"PiecesJointes"> | string
    type?: StringFilter<"PiecesJointes"> | string
    demandeId?: StringFilter<"PiecesJointes"> | string
  }

  export type DemandeCreateWithoutPiecesInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    dateSignatureGreffier?: Date | string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
    user: UsersCreateNestedOneWithoutDemandesInput
    greffier?: UsersCreateNestedOneWithoutDemandesTraiteesInput
    procureur?: UsersCreateNestedOneWithoutDemandesTraiteesProcInput
  }

  export type DemandeUncheckedCreateWithoutPiecesInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    userId: string
    greffierId?: string | null
    dateSignatureGreffier?: Date | string | null
    procureurId?: string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
  }

  export type DemandeCreateOrConnectWithoutPiecesInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutPiecesInput, DemandeUncheckedCreateWithoutPiecesInput>
  }

  export type DemandeUpsertWithoutPiecesInput = {
    update: XOR<DemandeUpdateWithoutPiecesInput, DemandeUncheckedUpdateWithoutPiecesInput>
    create: XOR<DemandeCreateWithoutPiecesInput, DemandeUncheckedCreateWithoutPiecesInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutPiecesInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutPiecesInput, DemandeUncheckedUpdateWithoutPiecesInput>
  }

  export type DemandeUpdateWithoutPiecesInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutDemandesNestedInput
    greffier?: UsersUpdateOneWithoutDemandesTraiteesNestedInput
    procureur?: UsersUpdateOneWithoutDemandesTraiteesProcNestedInput
  }

  export type DemandeUncheckedUpdateWithoutPiecesInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    greffierId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procureurId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeCreateManyUserInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    greffierId?: string | null
    dateSignatureGreffier?: Date | string | null
    procureurId?: string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
  }

  export type DemandeCreateManyGreffierInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    userId: string
    dateSignatureGreffier?: Date | string | null
    procureurId?: string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
  }

  export type DemandeCreateManyProcureurInput = {
    id?: string
    numeroDemande: string
    typeBulletin?: $Enums.TypeBulletin
    statutDemande?: $Enums.StatutDemande
    motif?: string | null
    nom: string
    prenom: string
    dateNaisssance: Date | string
    lieuNaissance: string
    nomPere: string
    nomMere: string
    profession: string
    situationMatrimonial: string
    domicile: string
    nationalite?: string
    userId: string
    greffierId?: string | null
    dateSignatureGreffier?: Date | string | null
    dateSignatureProcureur?: Date | string | null
    creatAt?: Date | string
  }

  export type DemandeUpdateWithoutUserInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greffier?: UsersUpdateOneWithoutDemandesTraiteesNestedInput
    procureur?: UsersUpdateOneWithoutDemandesTraiteesProcNestedInput
    pieces?: PiecesJointesUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutUserInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    greffierId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procureurId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pieces?: PiecesJointesUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutUserInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    greffierId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procureurId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeUpdateWithoutGreffierInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutDemandesNestedInput
    procureur?: UsersUpdateOneWithoutDemandesTraiteesProcNestedInput
    pieces?: PiecesJointesUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutGreffierInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procureurId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pieces?: PiecesJointesUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutGreffierInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procureurId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeUpdateWithoutProcureurInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutDemandesNestedInput
    greffier?: UsersUpdateOneWithoutDemandesTraiteesNestedInput
    pieces?: PiecesJointesUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutProcureurInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    greffierId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pieces?: PiecesJointesUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutProcureurInput = {
    numeroDemande?: StringFieldUpdateOperationsInput | string
    typeBulletin?: EnumTypeBulletinFieldUpdateOperationsInput | $Enums.TypeBulletin
    statutDemande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaisssance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: StringFieldUpdateOperationsInput | string
    nomPere?: StringFieldUpdateOperationsInput | string
    nomMere?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    situationMatrimonial?: StringFieldUpdateOperationsInput | string
    domicile?: StringFieldUpdateOperationsInput | string
    nationalite?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    greffierId?: NullableStringFieldUpdateOperationsInput | string | null
    dateSignatureGreffier?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureProcureur?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiecesJointesCreateManyDemandeInput = {
    id?: string
    url: string
    type: string
  }

  export type PiecesJointesUpdateWithoutDemandeInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PiecesJointesUncheckedUpdateWithoutDemandeInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PiecesJointesUncheckedUpdateManyWithoutDemandeInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}