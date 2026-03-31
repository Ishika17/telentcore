
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model applications
 * 
 */
export type applications = $Result.DefaultSelection<Prisma.$applicationsPayload>
/**
 * Model candidates
 * 
 */
export type candidates = $Result.DefaultSelection<Prisma.$candidatesPayload>
/**
 * Model jds
 * 
 */
export type jds = $Result.DefaultSelection<Prisma.$jdsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Applications
 * const applications = await prisma.applications.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Applications
   * const applications = await prisma.applications.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.applications`: Exposes CRUD operations for the **applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.applications.findMany()
    * ```
    */
  get applications(): Prisma.applicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidates`: Exposes CRUD operations for the **candidates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidates.findMany()
    * ```
    */
  get candidates(): Prisma.candidatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jds`: Exposes CRUD operations for the **jds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jds
    * const jds = await prisma.jds.findMany()
    * ```
    */
  get jds(): Prisma.jdsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    applications: 'applications',
    candidates: 'candidates',
    jds: 'jds'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "applications" | "candidates" | "jds"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      applications: {
        payload: Prisma.$applicationsPayload<ExtArgs>
        fields: Prisma.applicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.applicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.applicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          findFirst: {
            args: Prisma.applicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.applicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          findMany: {
            args: Prisma.applicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>[]
          }
          create: {
            args: Prisma.applicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          createMany: {
            args: Prisma.applicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.applicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>[]
          }
          delete: {
            args: Prisma.applicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          update: {
            args: Prisma.applicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          deleteMany: {
            args: Prisma.applicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.applicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.applicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>[]
          }
          upsert: {
            args: Prisma.applicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationsPayload>
          }
          aggregate: {
            args: Prisma.ApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplications>
          }
          groupBy: {
            args: Prisma.applicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.applicationsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsCountAggregateOutputType> | number
          }
        }
      }
      candidates: {
        payload: Prisma.$candidatesPayload<ExtArgs>
        fields: Prisma.candidatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.candidatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.candidatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          findFirst: {
            args: Prisma.candidatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.candidatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          findMany: {
            args: Prisma.candidatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          create: {
            args: Prisma.candidatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          createMany: {
            args: Prisma.candidatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.candidatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          delete: {
            args: Prisma.candidatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          update: {
            args: Prisma.candidatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          deleteMany: {
            args: Prisma.candidatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.candidatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.candidatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          upsert: {
            args: Prisma.candidatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          aggregate: {
            args: Prisma.CandidatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidates>
          }
          groupBy: {
            args: Prisma.candidatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.candidatesCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatesCountAggregateOutputType> | number
          }
        }
      }
      jds: {
        payload: Prisma.$jdsPayload<ExtArgs>
        fields: Prisma.jdsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jdsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jdsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload>
          }
          findFirst: {
            args: Prisma.jdsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jdsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload>
          }
          findMany: {
            args: Prisma.jdsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload>[]
          }
          create: {
            args: Prisma.jdsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload>
          }
          createMany: {
            args: Prisma.jdsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jdsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload>[]
          }
          delete: {
            args: Prisma.jdsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload>
          }
          update: {
            args: Prisma.jdsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload>
          }
          deleteMany: {
            args: Prisma.jdsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jdsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.jdsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload>[]
          }
          upsert: {
            args: Prisma.jdsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jdsPayload>
          }
          aggregate: {
            args: Prisma.JdsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJds>
          }
          groupBy: {
            args: Prisma.jdsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JdsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jdsCountArgs<ExtArgs>
            result: $Utils.Optional<JdsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    applications?: applicationsOmit
    candidates?: candidatesOmit
    jds?: jdsOmit
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
   * Count Type CandidatesCountOutputType
   */

  export type CandidatesCountOutputType = {
    applications: number
  }

  export type CandidatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | CandidatesCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * CandidatesCountOutputType without action
   */
  export type CandidatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatesCountOutputType
     */
    select?: CandidatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidatesCountOutputType without action
   */
  export type CandidatesCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationsWhereInput
  }


  /**
   * Count Type JdsCountOutputType
   */

  export type JdsCountOutputType = {
    applications: number
  }

  export type JdsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JdsCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JdsCountOutputType without action
   */
  export type JdsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JdsCountOutputType
     */
    select?: JdsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JdsCountOutputType without action
   */
  export type JdsCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model applications
   */

  export type AggregateApplications = {
    _count: ApplicationsCountAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  export type ApplicationsMinAggregateOutputType = {
    jd_id: string | null
    candidate_id: string | null
  }

  export type ApplicationsMaxAggregateOutputType = {
    jd_id: string | null
    candidate_id: string | null
  }

  export type ApplicationsCountAggregateOutputType = {
    jd_id: number
    candidate_id: number
    _all: number
  }


  export type ApplicationsMinAggregateInputType = {
    jd_id?: true
    candidate_id?: true
  }

  export type ApplicationsMaxAggregateInputType = {
    jd_id?: true
    candidate_id?: true
  }

  export type ApplicationsCountAggregateInputType = {
    jd_id?: true
    candidate_id?: true
    _all?: true
  }

  export type ApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applications to aggregate.
     */
    where?: applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned applications
    **/
    _count?: true | ApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationsMaxAggregateInputType
  }

  export type GetApplicationsAggregateType<T extends ApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplications[P]>
      : GetScalarType<T[P], AggregateApplications[P]>
  }




  export type applicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationsWhereInput
    orderBy?: applicationsOrderByWithAggregationInput | applicationsOrderByWithAggregationInput[]
    by: ApplicationsScalarFieldEnum[] | ApplicationsScalarFieldEnum
    having?: applicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationsCountAggregateInputType | true
    _min?: ApplicationsMinAggregateInputType
    _max?: ApplicationsMaxAggregateInputType
  }

  export type ApplicationsGroupByOutputType = {
    jd_id: string
    candidate_id: string
    _count: ApplicationsCountAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  type GetApplicationsGroupByPayload<T extends applicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type applicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jd_id?: boolean
    candidate_id?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    jds?: boolean | jdsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type applicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jd_id?: boolean
    candidate_id?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    jds?: boolean | jdsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type applicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jd_id?: boolean
    candidate_id?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    jds?: boolean | jdsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type applicationsSelectScalar = {
    jd_id?: boolean
    candidate_id?: boolean
  }

  export type applicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"jd_id" | "candidate_id", ExtArgs["result"]["applications"]>
  export type applicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    jds?: boolean | jdsDefaultArgs<ExtArgs>
  }
  export type applicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    jds?: boolean | jdsDefaultArgs<ExtArgs>
  }
  export type applicationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    jds?: boolean | jdsDefaultArgs<ExtArgs>
  }

  export type $applicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "applications"
    objects: {
      candidates: Prisma.$candidatesPayload<ExtArgs>
      jds: Prisma.$jdsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      jd_id: string
      candidate_id: string
    }, ExtArgs["result"]["applications"]>
    composites: {}
  }

  type applicationsGetPayload<S extends boolean | null | undefined | applicationsDefaultArgs> = $Result.GetResult<Prisma.$applicationsPayload, S>

  type applicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<applicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationsCountAggregateInputType | true
    }

  export interface applicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applications'], meta: { name: 'applications' } }
    /**
     * Find zero or one Applications that matches the filter.
     * @param {applicationsFindUniqueArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends applicationsFindUniqueArgs>(args: SelectSubset<T, applicationsFindUniqueArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {applicationsFindUniqueOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends applicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, applicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsFindFirstArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends applicationsFindFirstArgs>(args?: SelectSubset<T, applicationsFindFirstArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsFindFirstOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends applicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, applicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.applications.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.applications.findMany({ take: 10 })
     * 
     * // Only select the `jd_id`
     * const applicationsWithJd_idOnly = await prisma.applications.findMany({ select: { jd_id: true } })
     * 
     */
    findMany<T extends applicationsFindManyArgs>(args?: SelectSubset<T, applicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applications.
     * @param {applicationsCreateArgs} args - Arguments to create a Applications.
     * @example
     * // Create one Applications
     * const Applications = await prisma.applications.create({
     *   data: {
     *     // ... data to create a Applications
     *   }
     * })
     * 
     */
    create<T extends applicationsCreateArgs>(args: SelectSubset<T, applicationsCreateArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {applicationsCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends applicationsCreateManyArgs>(args?: SelectSubset<T, applicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {applicationsCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `jd_id`
     * const applicationsWithJd_idOnly = await prisma.applications.createManyAndReturn({
     *   select: { jd_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends applicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, applicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Applications.
     * @param {applicationsDeleteArgs} args - Arguments to delete one Applications.
     * @example
     * // Delete one Applications
     * const Applications = await prisma.applications.delete({
     *   where: {
     *     // ... filter to delete one Applications
     *   }
     * })
     * 
     */
    delete<T extends applicationsDeleteArgs>(args: SelectSubset<T, applicationsDeleteArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applications.
     * @param {applicationsUpdateArgs} args - Arguments to update one Applications.
     * @example
     * // Update one Applications
     * const applications = await prisma.applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends applicationsUpdateArgs>(args: SelectSubset<T, applicationsUpdateArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {applicationsDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends applicationsDeleteManyArgs>(args?: SelectSubset<T, applicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends applicationsUpdateManyArgs>(args: SelectSubset<T, applicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {applicationsUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `jd_id`
     * const applicationsWithJd_idOnly = await prisma.applications.updateManyAndReturn({
     *   select: { jd_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends applicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, applicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Applications.
     * @param {applicationsUpsertArgs} args - Arguments to update or create a Applications.
     * @example
     * // Update or create a Applications
     * const applications = await prisma.applications.upsert({
     *   create: {
     *     // ... data to create a Applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applications we want to update
     *   }
     * })
     */
    upsert<T extends applicationsUpsertArgs>(args: SelectSubset<T, applicationsUpsertArgs<ExtArgs>>): Prisma__applicationsClient<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.applications.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends applicationsCountArgs>(
      args?: Subset<T, applicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationsAggregateArgs>(args: Subset<T, ApplicationsAggregateArgs>): Prisma.PrismaPromise<GetApplicationsAggregateType<T>>

    /**
     * Group by Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationsGroupByArgs} args - Group by arguments.
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
      T extends applicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicationsGroupByArgs['orderBy'] }
        : { orderBy?: applicationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, applicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the applications model
   */
  readonly fields: applicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidates<T extends candidatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, candidatesDefaultArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jds<T extends jdsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jdsDefaultArgs<ExtArgs>>): Prisma__jdsClient<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the applications model
   */
  interface applicationsFieldRefs {
    readonly jd_id: FieldRef<"applications", 'String'>
    readonly candidate_id: FieldRef<"applications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * applications findUnique
   */
  export type applicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where: applicationsWhereUniqueInput
  }

  /**
   * applications findUniqueOrThrow
   */
  export type applicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where: applicationsWhereUniqueInput
  }

  /**
   * applications findFirst
   */
  export type applicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applications.
     */
    cursor?: applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * applications findFirstOrThrow
   */
  export type applicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applications.
     */
    cursor?: applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * applications findMany
   */
  export type applicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing applications.
     */
    cursor?: applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * applications create
   */
  export type applicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a applications.
     */
    data: XOR<applicationsCreateInput, applicationsUncheckedCreateInput>
  }

  /**
   * applications createMany
   */
  export type applicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applications.
     */
    data: applicationsCreateManyInput | applicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * applications createManyAndReturn
   */
  export type applicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * The data used to create many applications.
     */
    data: applicationsCreateManyInput | applicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * applications update
   */
  export type applicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a applications.
     */
    data: XOR<applicationsUpdateInput, applicationsUncheckedUpdateInput>
    /**
     * Choose, which applications to update.
     */
    where: applicationsWhereUniqueInput
  }

  /**
   * applications updateMany
   */
  export type applicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applications.
     */
    data: XOR<applicationsUpdateManyMutationInput, applicationsUncheckedUpdateManyInput>
    /**
     * Filter which applications to update
     */
    where?: applicationsWhereInput
    /**
     * Limit how many applications to update.
     */
    limit?: number
  }

  /**
   * applications updateManyAndReturn
   */
  export type applicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * The data used to update applications.
     */
    data: XOR<applicationsUpdateManyMutationInput, applicationsUncheckedUpdateManyInput>
    /**
     * Filter which applications to update
     */
    where?: applicationsWhereInput
    /**
     * Limit how many applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * applications upsert
   */
  export type applicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the applications to update in case it exists.
     */
    where: applicationsWhereUniqueInput
    /**
     * In case the applications found by the `where` argument doesn't exist, create a new applications with this data.
     */
    create: XOR<applicationsCreateInput, applicationsUncheckedCreateInput>
    /**
     * In case the applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicationsUpdateInput, applicationsUncheckedUpdateInput>
  }

  /**
   * applications delete
   */
  export type applicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    /**
     * Filter which applications to delete.
     */
    where: applicationsWhereUniqueInput
  }

  /**
   * applications deleteMany
   */
  export type applicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applications to delete
     */
    where?: applicationsWhereInput
    /**
     * Limit how many applications to delete.
     */
    limit?: number
  }

  /**
   * applications without action
   */
  export type applicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
  }


  /**
   * Model candidates
   */

  export type AggregateCandidates = {
    _count: CandidatesCountAggregateOutputType | null
    _avg: CandidatesAvgAggregateOutputType | null
    _sum: CandidatesSumAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  export type CandidatesAvgAggregateOutputType = {
    total_exp: number | null
  }

  export type CandidatesSumAggregateOutputType = {
    total_exp: number | null
  }

  export type CandidatesMinAggregateOutputType = {
    id: string | null
    name: string | null
    total_exp: number | null
  }

  export type CandidatesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    total_exp: number | null
  }

  export type CandidatesCountAggregateOutputType = {
    id: number
    name: number
    total_exp: number
    skills: number
    _all: number
  }


  export type CandidatesAvgAggregateInputType = {
    total_exp?: true
  }

  export type CandidatesSumAggregateInputType = {
    total_exp?: true
  }

  export type CandidatesMinAggregateInputType = {
    id?: true
    name?: true
    total_exp?: true
  }

  export type CandidatesMaxAggregateInputType = {
    id?: true
    name?: true
    total_exp?: true
  }

  export type CandidatesCountAggregateInputType = {
    id?: true
    name?: true
    total_exp?: true
    skills?: true
    _all?: true
  }

  export type CandidatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidates to aggregate.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned candidates
    **/
    _count?: true | CandidatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatesMaxAggregateInputType
  }

  export type GetCandidatesAggregateType<T extends CandidatesAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidates[P]>
      : GetScalarType<T[P], AggregateCandidates[P]>
  }




  export type candidatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidatesWhereInput
    orderBy?: candidatesOrderByWithAggregationInput | candidatesOrderByWithAggregationInput[]
    by: CandidatesScalarFieldEnum[] | CandidatesScalarFieldEnum
    having?: candidatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatesCountAggregateInputType | true
    _avg?: CandidatesAvgAggregateInputType
    _sum?: CandidatesSumAggregateInputType
    _min?: CandidatesMinAggregateInputType
    _max?: CandidatesMaxAggregateInputType
  }

  export type CandidatesGroupByOutputType = {
    id: string
    name: string
    total_exp: number
    skills: string[]
    _count: CandidatesCountAggregateOutputType | null
    _avg: CandidatesAvgAggregateOutputType | null
    _sum: CandidatesSumAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  type GetCandidatesGroupByPayload<T extends candidatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
        }
      >
    >


  export type candidatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    total_exp?: boolean
    skills?: boolean
    applications?: boolean | candidates$applicationsArgs<ExtArgs>
    _count?: boolean | CandidatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidates"]>

  export type candidatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    total_exp?: boolean
    skills?: boolean
  }, ExtArgs["result"]["candidates"]>

  export type candidatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    total_exp?: boolean
    skills?: boolean
  }, ExtArgs["result"]["candidates"]>

  export type candidatesSelectScalar = {
    id?: boolean
    name?: boolean
    total_exp?: boolean
    skills?: boolean
  }

  export type candidatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "total_exp" | "skills", ExtArgs["result"]["candidates"]>
  export type candidatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | candidates$applicationsArgs<ExtArgs>
    _count?: boolean | CandidatesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type candidatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type candidatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $candidatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "candidates"
    objects: {
      applications: Prisma.$applicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      total_exp: number
      skills: string[]
    }, ExtArgs["result"]["candidates"]>
    composites: {}
  }

  type candidatesGetPayload<S extends boolean | null | undefined | candidatesDefaultArgs> = $Result.GetResult<Prisma.$candidatesPayload, S>

  type candidatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<candidatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatesCountAggregateInputType | true
    }

  export interface candidatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidates'], meta: { name: 'candidates' } }
    /**
     * Find zero or one Candidates that matches the filter.
     * @param {candidatesFindUniqueArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends candidatesFindUniqueArgs>(args: SelectSubset<T, candidatesFindUniqueArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {candidatesFindUniqueOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends candidatesFindUniqueOrThrowArgs>(args: SelectSubset<T, candidatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindFirstArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends candidatesFindFirstArgs>(args?: SelectSubset<T, candidatesFindFirstArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindFirstOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends candidatesFindFirstOrThrowArgs>(args?: SelectSubset<T, candidatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidates.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidatesWithIdOnly = await prisma.candidates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends candidatesFindManyArgs>(args?: SelectSubset<T, candidatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidates.
     * @param {candidatesCreateArgs} args - Arguments to create a Candidates.
     * @example
     * // Create one Candidates
     * const Candidates = await prisma.candidates.create({
     *   data: {
     *     // ... data to create a Candidates
     *   }
     * })
     * 
     */
    create<T extends candidatesCreateArgs>(args: SelectSubset<T, candidatesCreateArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {candidatesCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidates = await prisma.candidates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends candidatesCreateManyArgs>(args?: SelectSubset<T, candidatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {candidatesCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidates = await prisma.candidates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidatesWithIdOnly = await prisma.candidates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends candidatesCreateManyAndReturnArgs>(args?: SelectSubset<T, candidatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidates.
     * @param {candidatesDeleteArgs} args - Arguments to delete one Candidates.
     * @example
     * // Delete one Candidates
     * const Candidates = await prisma.candidates.delete({
     *   where: {
     *     // ... filter to delete one Candidates
     *   }
     * })
     * 
     */
    delete<T extends candidatesDeleteArgs>(args: SelectSubset<T, candidatesDeleteArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidates.
     * @param {candidatesUpdateArgs} args - Arguments to update one Candidates.
     * @example
     * // Update one Candidates
     * const candidates = await prisma.candidates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends candidatesUpdateArgs>(args: SelectSubset<T, candidatesUpdateArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {candidatesDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends candidatesDeleteManyArgs>(args?: SelectSubset<T, candidatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidates = await prisma.candidates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends candidatesUpdateManyArgs>(args: SelectSubset<T, candidatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {candidatesUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidates = await prisma.candidates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidatesWithIdOnly = await prisma.candidates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends candidatesUpdateManyAndReturnArgs>(args: SelectSubset<T, candidatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidates.
     * @param {candidatesUpsertArgs} args - Arguments to update or create a Candidates.
     * @example
     * // Update or create a Candidates
     * const candidates = await prisma.candidates.upsert({
     *   create: {
     *     // ... data to create a Candidates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidates we want to update
     *   }
     * })
     */
    upsert<T extends candidatesUpsertArgs>(args: SelectSubset<T, candidatesUpsertArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidates.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends candidatesCountArgs>(
      args?: Subset<T, candidatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidatesAggregateArgs>(args: Subset<T, CandidatesAggregateArgs>): Prisma.PrismaPromise<GetCandidatesAggregateType<T>>

    /**
     * Group by Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesGroupByArgs} args - Group by arguments.
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
      T extends candidatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidatesGroupByArgs['orderBy'] }
        : { orderBy?: candidatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, candidatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the candidates model
   */
  readonly fields: candidatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends candidates$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, candidates$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the candidates model
   */
  interface candidatesFieldRefs {
    readonly id: FieldRef<"candidates", 'String'>
    readonly name: FieldRef<"candidates", 'String'>
    readonly total_exp: FieldRef<"candidates", 'Int'>
    readonly skills: FieldRef<"candidates", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * candidates findUnique
   */
  export type candidatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates findUniqueOrThrow
   */
  export type candidatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates findFirst
   */
  export type candidatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates findFirstOrThrow
   */
  export type candidatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates findMany
   */
  export type candidatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates create
   */
  export type candidatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * The data needed to create a candidates.
     */
    data: XOR<candidatesCreateInput, candidatesUncheckedCreateInput>
  }

  /**
   * candidates createMany
   */
  export type candidatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidates.
     */
    data: candidatesCreateManyInput | candidatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidates createManyAndReturn
   */
  export type candidatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * The data used to create many candidates.
     */
    data: candidatesCreateManyInput | candidatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidates update
   */
  export type candidatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * The data needed to update a candidates.
     */
    data: XOR<candidatesUpdateInput, candidatesUncheckedUpdateInput>
    /**
     * Choose, which candidates to update.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates updateMany
   */
  export type candidatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidates.
     */
    data: XOR<candidatesUpdateManyMutationInput, candidatesUncheckedUpdateManyInput>
    /**
     * Filter which candidates to update
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to update.
     */
    limit?: number
  }

  /**
   * candidates updateManyAndReturn
   */
  export type candidatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * The data used to update candidates.
     */
    data: XOR<candidatesUpdateManyMutationInput, candidatesUncheckedUpdateManyInput>
    /**
     * Filter which candidates to update
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to update.
     */
    limit?: number
  }

  /**
   * candidates upsert
   */
  export type candidatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * The filter to search for the candidates to update in case it exists.
     */
    where: candidatesWhereUniqueInput
    /**
     * In case the candidates found by the `where` argument doesn't exist, create a new candidates with this data.
     */
    create: XOR<candidatesCreateInput, candidatesUncheckedCreateInput>
    /**
     * In case the candidates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidatesUpdateInput, candidatesUncheckedUpdateInput>
  }

  /**
   * candidates delete
   */
  export type candidatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter which candidates to delete.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates deleteMany
   */
  export type candidatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidates to delete
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to delete.
     */
    limit?: number
  }

  /**
   * candidates.applications
   */
  export type candidates$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    where?: applicationsWhereInput
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    cursor?: applicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * candidates without action
   */
  export type candidatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
  }


  /**
   * Model jds
   */

  export type AggregateJds = {
    _count: JdsCountAggregateOutputType | null
    _avg: JdsAvgAggregateOutputType | null
    _sum: JdsSumAggregateOutputType | null
    _min: JdsMinAggregateOutputType | null
    _max: JdsMaxAggregateOutputType | null
  }

  export type JdsAvgAggregateOutputType = {
    min_exp: number | null
  }

  export type JdsSumAggregateOutputType = {
    min_exp: number | null
  }

  export type JdsMinAggregateOutputType = {
    id: string | null
    title: string | null
    min_exp: number | null
  }

  export type JdsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    min_exp: number | null
  }

  export type JdsCountAggregateOutputType = {
    id: number
    title: number
    min_exp: number
    skills: number
    _all: number
  }


  export type JdsAvgAggregateInputType = {
    min_exp?: true
  }

  export type JdsSumAggregateInputType = {
    min_exp?: true
  }

  export type JdsMinAggregateInputType = {
    id?: true
    title?: true
    min_exp?: true
  }

  export type JdsMaxAggregateInputType = {
    id?: true
    title?: true
    min_exp?: true
  }

  export type JdsCountAggregateInputType = {
    id?: true
    title?: true
    min_exp?: true
    skills?: true
    _all?: true
  }

  export type JdsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jds to aggregate.
     */
    where?: jdsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jds to fetch.
     */
    orderBy?: jdsOrderByWithRelationInput | jdsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jdsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jds
    **/
    _count?: true | JdsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JdsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JdsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JdsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JdsMaxAggregateInputType
  }

  export type GetJdsAggregateType<T extends JdsAggregateArgs> = {
        [P in keyof T & keyof AggregateJds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJds[P]>
      : GetScalarType<T[P], AggregateJds[P]>
  }




  export type jdsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jdsWhereInput
    orderBy?: jdsOrderByWithAggregationInput | jdsOrderByWithAggregationInput[]
    by: JdsScalarFieldEnum[] | JdsScalarFieldEnum
    having?: jdsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JdsCountAggregateInputType | true
    _avg?: JdsAvgAggregateInputType
    _sum?: JdsSumAggregateInputType
    _min?: JdsMinAggregateInputType
    _max?: JdsMaxAggregateInputType
  }

  export type JdsGroupByOutputType = {
    id: string
    title: string
    min_exp: number
    skills: string[]
    _count: JdsCountAggregateOutputType | null
    _avg: JdsAvgAggregateOutputType | null
    _sum: JdsSumAggregateOutputType | null
    _min: JdsMinAggregateOutputType | null
    _max: JdsMaxAggregateOutputType | null
  }

  type GetJdsGroupByPayload<T extends jdsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JdsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JdsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JdsGroupByOutputType[P]>
            : GetScalarType<T[P], JdsGroupByOutputType[P]>
        }
      >
    >


  export type jdsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    min_exp?: boolean
    skills?: boolean
    applications?: boolean | jds$applicationsArgs<ExtArgs>
    _count?: boolean | JdsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jds"]>

  export type jdsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    min_exp?: boolean
    skills?: boolean
  }, ExtArgs["result"]["jds"]>

  export type jdsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    min_exp?: boolean
    skills?: boolean
  }, ExtArgs["result"]["jds"]>

  export type jdsSelectScalar = {
    id?: boolean
    title?: boolean
    min_exp?: boolean
    skills?: boolean
  }

  export type jdsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "min_exp" | "skills", ExtArgs["result"]["jds"]>
  export type jdsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | jds$applicationsArgs<ExtArgs>
    _count?: boolean | JdsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type jdsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type jdsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $jdsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jds"
    objects: {
      applications: Prisma.$applicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      min_exp: number
      skills: string[]
    }, ExtArgs["result"]["jds"]>
    composites: {}
  }

  type jdsGetPayload<S extends boolean | null | undefined | jdsDefaultArgs> = $Result.GetResult<Prisma.$jdsPayload, S>

  type jdsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jdsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JdsCountAggregateInputType | true
    }

  export interface jdsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jds'], meta: { name: 'jds' } }
    /**
     * Find zero or one Jds that matches the filter.
     * @param {jdsFindUniqueArgs} args - Arguments to find a Jds
     * @example
     * // Get one Jds
     * const jds = await prisma.jds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jdsFindUniqueArgs>(args: SelectSubset<T, jdsFindUniqueArgs<ExtArgs>>): Prisma__jdsClient<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jdsFindUniqueOrThrowArgs} args - Arguments to find a Jds
     * @example
     * // Get one Jds
     * const jds = await prisma.jds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jdsFindUniqueOrThrowArgs>(args: SelectSubset<T, jdsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jdsClient<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jdsFindFirstArgs} args - Arguments to find a Jds
     * @example
     * // Get one Jds
     * const jds = await prisma.jds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jdsFindFirstArgs>(args?: SelectSubset<T, jdsFindFirstArgs<ExtArgs>>): Prisma__jdsClient<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jdsFindFirstOrThrowArgs} args - Arguments to find a Jds
     * @example
     * // Get one Jds
     * const jds = await prisma.jds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jdsFindFirstOrThrowArgs>(args?: SelectSubset<T, jdsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jdsClient<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jdsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jds
     * const jds = await prisma.jds.findMany()
     * 
     * // Get first 10 Jds
     * const jds = await prisma.jds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jdsWithIdOnly = await prisma.jds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jdsFindManyArgs>(args?: SelectSubset<T, jdsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jds.
     * @param {jdsCreateArgs} args - Arguments to create a Jds.
     * @example
     * // Create one Jds
     * const Jds = await prisma.jds.create({
     *   data: {
     *     // ... data to create a Jds
     *   }
     * })
     * 
     */
    create<T extends jdsCreateArgs>(args: SelectSubset<T, jdsCreateArgs<ExtArgs>>): Prisma__jdsClient<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jds.
     * @param {jdsCreateManyArgs} args - Arguments to create many Jds.
     * @example
     * // Create many Jds
     * const jds = await prisma.jds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jdsCreateManyArgs>(args?: SelectSubset<T, jdsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jds and returns the data saved in the database.
     * @param {jdsCreateManyAndReturnArgs} args - Arguments to create many Jds.
     * @example
     * // Create many Jds
     * const jds = await prisma.jds.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jds and only return the `id`
     * const jdsWithIdOnly = await prisma.jds.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jdsCreateManyAndReturnArgs>(args?: SelectSubset<T, jdsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jds.
     * @param {jdsDeleteArgs} args - Arguments to delete one Jds.
     * @example
     * // Delete one Jds
     * const Jds = await prisma.jds.delete({
     *   where: {
     *     // ... filter to delete one Jds
     *   }
     * })
     * 
     */
    delete<T extends jdsDeleteArgs>(args: SelectSubset<T, jdsDeleteArgs<ExtArgs>>): Prisma__jdsClient<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jds.
     * @param {jdsUpdateArgs} args - Arguments to update one Jds.
     * @example
     * // Update one Jds
     * const jds = await prisma.jds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jdsUpdateArgs>(args: SelectSubset<T, jdsUpdateArgs<ExtArgs>>): Prisma__jdsClient<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jds.
     * @param {jdsDeleteManyArgs} args - Arguments to filter Jds to delete.
     * @example
     * // Delete a few Jds
     * const { count } = await prisma.jds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jdsDeleteManyArgs>(args?: SelectSubset<T, jdsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jdsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jds
     * const jds = await prisma.jds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jdsUpdateManyArgs>(args: SelectSubset<T, jdsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jds and returns the data updated in the database.
     * @param {jdsUpdateManyAndReturnArgs} args - Arguments to update many Jds.
     * @example
     * // Update many Jds
     * const jds = await prisma.jds.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jds and only return the `id`
     * const jdsWithIdOnly = await prisma.jds.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends jdsUpdateManyAndReturnArgs>(args: SelectSubset<T, jdsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jds.
     * @param {jdsUpsertArgs} args - Arguments to update or create a Jds.
     * @example
     * // Update or create a Jds
     * const jds = await prisma.jds.upsert({
     *   create: {
     *     // ... data to create a Jds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jds we want to update
     *   }
     * })
     */
    upsert<T extends jdsUpsertArgs>(args: SelectSubset<T, jdsUpsertArgs<ExtArgs>>): Prisma__jdsClient<$Result.GetResult<Prisma.$jdsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jdsCountArgs} args - Arguments to filter Jds to count.
     * @example
     * // Count the number of Jds
     * const count = await prisma.jds.count({
     *   where: {
     *     // ... the filter for the Jds we want to count
     *   }
     * })
    **/
    count<T extends jdsCountArgs>(
      args?: Subset<T, jdsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JdsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JdsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JdsAggregateArgs>(args: Subset<T, JdsAggregateArgs>): Prisma.PrismaPromise<GetJdsAggregateType<T>>

    /**
     * Group by Jds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jdsGroupByArgs} args - Group by arguments.
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
      T extends jdsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jdsGroupByArgs['orderBy'] }
        : { orderBy?: jdsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jdsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJdsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jds model
   */
  readonly fields: jdsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jdsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends jds$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, jds$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the jds model
   */
  interface jdsFieldRefs {
    readonly id: FieldRef<"jds", 'String'>
    readonly title: FieldRef<"jds", 'String'>
    readonly min_exp: FieldRef<"jds", 'Int'>
    readonly skills: FieldRef<"jds", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * jds findUnique
   */
  export type jdsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
    /**
     * Filter, which jds to fetch.
     */
    where: jdsWhereUniqueInput
  }

  /**
   * jds findUniqueOrThrow
   */
  export type jdsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
    /**
     * Filter, which jds to fetch.
     */
    where: jdsWhereUniqueInput
  }

  /**
   * jds findFirst
   */
  export type jdsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
    /**
     * Filter, which jds to fetch.
     */
    where?: jdsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jds to fetch.
     */
    orderBy?: jdsOrderByWithRelationInput | jdsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jds.
     */
    cursor?: jdsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jds.
     */
    distinct?: JdsScalarFieldEnum | JdsScalarFieldEnum[]
  }

  /**
   * jds findFirstOrThrow
   */
  export type jdsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
    /**
     * Filter, which jds to fetch.
     */
    where?: jdsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jds to fetch.
     */
    orderBy?: jdsOrderByWithRelationInput | jdsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jds.
     */
    cursor?: jdsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jds.
     */
    distinct?: JdsScalarFieldEnum | JdsScalarFieldEnum[]
  }

  /**
   * jds findMany
   */
  export type jdsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
    /**
     * Filter, which jds to fetch.
     */
    where?: jdsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jds to fetch.
     */
    orderBy?: jdsOrderByWithRelationInput | jdsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jds.
     */
    cursor?: jdsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jds.
     */
    distinct?: JdsScalarFieldEnum | JdsScalarFieldEnum[]
  }

  /**
   * jds create
   */
  export type jdsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
    /**
     * The data needed to create a jds.
     */
    data: XOR<jdsCreateInput, jdsUncheckedCreateInput>
  }

  /**
   * jds createMany
   */
  export type jdsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jds.
     */
    data: jdsCreateManyInput | jdsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jds createManyAndReturn
   */
  export type jdsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * The data used to create many jds.
     */
    data: jdsCreateManyInput | jdsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jds update
   */
  export type jdsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
    /**
     * The data needed to update a jds.
     */
    data: XOR<jdsUpdateInput, jdsUncheckedUpdateInput>
    /**
     * Choose, which jds to update.
     */
    where: jdsWhereUniqueInput
  }

  /**
   * jds updateMany
   */
  export type jdsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jds.
     */
    data: XOR<jdsUpdateManyMutationInput, jdsUncheckedUpdateManyInput>
    /**
     * Filter which jds to update
     */
    where?: jdsWhereInput
    /**
     * Limit how many jds to update.
     */
    limit?: number
  }

  /**
   * jds updateManyAndReturn
   */
  export type jdsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * The data used to update jds.
     */
    data: XOR<jdsUpdateManyMutationInput, jdsUncheckedUpdateManyInput>
    /**
     * Filter which jds to update
     */
    where?: jdsWhereInput
    /**
     * Limit how many jds to update.
     */
    limit?: number
  }

  /**
   * jds upsert
   */
  export type jdsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
    /**
     * The filter to search for the jds to update in case it exists.
     */
    where: jdsWhereUniqueInput
    /**
     * In case the jds found by the `where` argument doesn't exist, create a new jds with this data.
     */
    create: XOR<jdsCreateInput, jdsUncheckedCreateInput>
    /**
     * In case the jds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jdsUpdateInput, jdsUncheckedUpdateInput>
  }

  /**
   * jds delete
   */
  export type jdsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
    /**
     * Filter which jds to delete.
     */
    where: jdsWhereUniqueInput
  }

  /**
   * jds deleteMany
   */
  export type jdsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jds to delete
     */
    where?: jdsWhereInput
    /**
     * Limit how many jds to delete.
     */
    limit?: number
  }

  /**
   * jds.applications
   */
  export type jds$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applications
     */
    select?: applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applications
     */
    omit?: applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationsInclude<ExtArgs> | null
    where?: applicationsWhereInput
    orderBy?: applicationsOrderByWithRelationInput | applicationsOrderByWithRelationInput[]
    cursor?: applicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * jds without action
   */
  export type jdsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jds
     */
    select?: jdsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jds
     */
    omit?: jdsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jdsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApplicationsScalarFieldEnum: {
    jd_id: 'jd_id',
    candidate_id: 'candidate_id'
  };

  export type ApplicationsScalarFieldEnum = (typeof ApplicationsScalarFieldEnum)[keyof typeof ApplicationsScalarFieldEnum]


  export const CandidatesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    total_exp: 'total_exp',
    skills: 'skills'
  };

  export type CandidatesScalarFieldEnum = (typeof CandidatesScalarFieldEnum)[keyof typeof CandidatesScalarFieldEnum]


  export const JdsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    min_exp: 'min_exp',
    skills: 'skills'
  };

  export type JdsScalarFieldEnum = (typeof JdsScalarFieldEnum)[keyof typeof JdsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type applicationsWhereInput = {
    AND?: applicationsWhereInput | applicationsWhereInput[]
    OR?: applicationsWhereInput[]
    NOT?: applicationsWhereInput | applicationsWhereInput[]
    jd_id?: UuidFilter<"applications"> | string
    candidate_id?: UuidFilter<"applications"> | string
    candidates?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
    jds?: XOR<JdsScalarRelationFilter, jdsWhereInput>
  }

  export type applicationsOrderByWithRelationInput = {
    jd_id?: SortOrder
    candidate_id?: SortOrder
    candidates?: candidatesOrderByWithRelationInput
    jds?: jdsOrderByWithRelationInput
  }

  export type applicationsWhereUniqueInput = Prisma.AtLeast<{
    jd_id_candidate_id?: applicationsJd_idCandidate_idCompoundUniqueInput
    AND?: applicationsWhereInput | applicationsWhereInput[]
    OR?: applicationsWhereInput[]
    NOT?: applicationsWhereInput | applicationsWhereInput[]
    jd_id?: UuidFilter<"applications"> | string
    candidate_id?: UuidFilter<"applications"> | string
    candidates?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
    jds?: XOR<JdsScalarRelationFilter, jdsWhereInput>
  }, "jd_id_candidate_id">

  export type applicationsOrderByWithAggregationInput = {
    jd_id?: SortOrder
    candidate_id?: SortOrder
    _count?: applicationsCountOrderByAggregateInput
    _max?: applicationsMaxOrderByAggregateInput
    _min?: applicationsMinOrderByAggregateInput
  }

  export type applicationsScalarWhereWithAggregatesInput = {
    AND?: applicationsScalarWhereWithAggregatesInput | applicationsScalarWhereWithAggregatesInput[]
    OR?: applicationsScalarWhereWithAggregatesInput[]
    NOT?: applicationsScalarWhereWithAggregatesInput | applicationsScalarWhereWithAggregatesInput[]
    jd_id?: UuidWithAggregatesFilter<"applications"> | string
    candidate_id?: UuidWithAggregatesFilter<"applications"> | string
  }

  export type candidatesWhereInput = {
    AND?: candidatesWhereInput | candidatesWhereInput[]
    OR?: candidatesWhereInput[]
    NOT?: candidatesWhereInput | candidatesWhereInput[]
    id?: UuidFilter<"candidates"> | string
    name?: StringFilter<"candidates"> | string
    total_exp?: IntFilter<"candidates"> | number
    skills?: StringNullableListFilter<"candidates">
    applications?: ApplicationsListRelationFilter
  }

  export type candidatesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    total_exp?: SortOrder
    skills?: SortOrder
    applications?: applicationsOrderByRelationAggregateInput
  }

  export type candidatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: candidatesWhereInput | candidatesWhereInput[]
    OR?: candidatesWhereInput[]
    NOT?: candidatesWhereInput | candidatesWhereInput[]
    name?: StringFilter<"candidates"> | string
    total_exp?: IntFilter<"candidates"> | number
    skills?: StringNullableListFilter<"candidates">
    applications?: ApplicationsListRelationFilter
  }, "id">

  export type candidatesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    total_exp?: SortOrder
    skills?: SortOrder
    _count?: candidatesCountOrderByAggregateInput
    _avg?: candidatesAvgOrderByAggregateInput
    _max?: candidatesMaxOrderByAggregateInput
    _min?: candidatesMinOrderByAggregateInput
    _sum?: candidatesSumOrderByAggregateInput
  }

  export type candidatesScalarWhereWithAggregatesInput = {
    AND?: candidatesScalarWhereWithAggregatesInput | candidatesScalarWhereWithAggregatesInput[]
    OR?: candidatesScalarWhereWithAggregatesInput[]
    NOT?: candidatesScalarWhereWithAggregatesInput | candidatesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"candidates"> | string
    name?: StringWithAggregatesFilter<"candidates"> | string
    total_exp?: IntWithAggregatesFilter<"candidates"> | number
    skills?: StringNullableListFilter<"candidates">
  }

  export type jdsWhereInput = {
    AND?: jdsWhereInput | jdsWhereInput[]
    OR?: jdsWhereInput[]
    NOT?: jdsWhereInput | jdsWhereInput[]
    id?: UuidFilter<"jds"> | string
    title?: StringFilter<"jds"> | string
    min_exp?: IntFilter<"jds"> | number
    skills?: StringNullableListFilter<"jds">
    applications?: ApplicationsListRelationFilter
  }

  export type jdsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    min_exp?: SortOrder
    skills?: SortOrder
    applications?: applicationsOrderByRelationAggregateInput
  }

  export type jdsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: jdsWhereInput | jdsWhereInput[]
    OR?: jdsWhereInput[]
    NOT?: jdsWhereInput | jdsWhereInput[]
    title?: StringFilter<"jds"> | string
    min_exp?: IntFilter<"jds"> | number
    skills?: StringNullableListFilter<"jds">
    applications?: ApplicationsListRelationFilter
  }, "id">

  export type jdsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    min_exp?: SortOrder
    skills?: SortOrder
    _count?: jdsCountOrderByAggregateInput
    _avg?: jdsAvgOrderByAggregateInput
    _max?: jdsMaxOrderByAggregateInput
    _min?: jdsMinOrderByAggregateInput
    _sum?: jdsSumOrderByAggregateInput
  }

  export type jdsScalarWhereWithAggregatesInput = {
    AND?: jdsScalarWhereWithAggregatesInput | jdsScalarWhereWithAggregatesInput[]
    OR?: jdsScalarWhereWithAggregatesInput[]
    NOT?: jdsScalarWhereWithAggregatesInput | jdsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"jds"> | string
    title?: StringWithAggregatesFilter<"jds"> | string
    min_exp?: IntWithAggregatesFilter<"jds"> | number
    skills?: StringNullableListFilter<"jds">
  }

  export type applicationsCreateInput = {
    candidates: candidatesCreateNestedOneWithoutApplicationsInput
    jds: jdsCreateNestedOneWithoutApplicationsInput
  }

  export type applicationsUncheckedCreateInput = {
    jd_id: string
    candidate_id: string
  }

  export type applicationsUpdateInput = {
    candidates?: candidatesUpdateOneRequiredWithoutApplicationsNestedInput
    jds?: jdsUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type applicationsUncheckedUpdateInput = {
    jd_id?: StringFieldUpdateOperationsInput | string
    candidate_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationsCreateManyInput = {
    jd_id: string
    candidate_id: string
  }

  export type applicationsUpdateManyMutationInput = {

  }

  export type applicationsUncheckedUpdateManyInput = {
    jd_id?: StringFieldUpdateOperationsInput | string
    candidate_id?: StringFieldUpdateOperationsInput | string
  }

  export type candidatesCreateInput = {
    id: string
    name: string
    total_exp: number
    skills?: candidatesCreateskillsInput | string[]
    applications?: applicationsCreateNestedManyWithoutCandidatesInput
  }

  export type candidatesUncheckedCreateInput = {
    id: string
    name: string
    total_exp: number
    skills?: candidatesCreateskillsInput | string[]
    applications?: applicationsUncheckedCreateNestedManyWithoutCandidatesInput
  }

  export type candidatesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_exp?: IntFieldUpdateOperationsInput | number
    skills?: candidatesUpdateskillsInput | string[]
    applications?: applicationsUpdateManyWithoutCandidatesNestedInput
  }

  export type candidatesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_exp?: IntFieldUpdateOperationsInput | number
    skills?: candidatesUpdateskillsInput | string[]
    applications?: applicationsUncheckedUpdateManyWithoutCandidatesNestedInput
  }

  export type candidatesCreateManyInput = {
    id: string
    name: string
    total_exp: number
    skills?: candidatesCreateskillsInput | string[]
  }

  export type candidatesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_exp?: IntFieldUpdateOperationsInput | number
    skills?: candidatesUpdateskillsInput | string[]
  }

  export type candidatesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_exp?: IntFieldUpdateOperationsInput | number
    skills?: candidatesUpdateskillsInput | string[]
  }

  export type jdsCreateInput = {
    id: string
    title: string
    min_exp: number
    skills?: jdsCreateskillsInput | string[]
    applications?: applicationsCreateNestedManyWithoutJdsInput
  }

  export type jdsUncheckedCreateInput = {
    id: string
    title: string
    min_exp: number
    skills?: jdsCreateskillsInput | string[]
    applications?: applicationsUncheckedCreateNestedManyWithoutJdsInput
  }

  export type jdsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    min_exp?: IntFieldUpdateOperationsInput | number
    skills?: jdsUpdateskillsInput | string[]
    applications?: applicationsUpdateManyWithoutJdsNestedInput
  }

  export type jdsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    min_exp?: IntFieldUpdateOperationsInput | number
    skills?: jdsUpdateskillsInput | string[]
    applications?: applicationsUncheckedUpdateManyWithoutJdsNestedInput
  }

  export type jdsCreateManyInput = {
    id: string
    title: string
    min_exp: number
    skills?: jdsCreateskillsInput | string[]
  }

  export type jdsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    min_exp?: IntFieldUpdateOperationsInput | number
    skills?: jdsUpdateskillsInput | string[]
  }

  export type jdsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    min_exp?: IntFieldUpdateOperationsInput | number
    skills?: jdsUpdateskillsInput | string[]
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type CandidatesScalarRelationFilter = {
    is?: candidatesWhereInput
    isNot?: candidatesWhereInput
  }

  export type JdsScalarRelationFilter = {
    is?: jdsWhereInput
    isNot?: jdsWhereInput
  }

  export type applicationsJd_idCandidate_idCompoundUniqueInput = {
    jd_id: string
    candidate_id: string
  }

  export type applicationsCountOrderByAggregateInput = {
    jd_id?: SortOrder
    candidate_id?: SortOrder
  }

  export type applicationsMaxOrderByAggregateInput = {
    jd_id?: SortOrder
    candidate_id?: SortOrder
  }

  export type applicationsMinOrderByAggregateInput = {
    jd_id?: SortOrder
    candidate_id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ApplicationsListRelationFilter = {
    every?: applicationsWhereInput
    some?: applicationsWhereInput
    none?: applicationsWhereInput
  }

  export type applicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type candidatesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_exp?: SortOrder
    skills?: SortOrder
  }

  export type candidatesAvgOrderByAggregateInput = {
    total_exp?: SortOrder
  }

  export type candidatesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_exp?: SortOrder
  }

  export type candidatesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_exp?: SortOrder
  }

  export type candidatesSumOrderByAggregateInput = {
    total_exp?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type jdsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    min_exp?: SortOrder
    skills?: SortOrder
  }

  export type jdsAvgOrderByAggregateInput = {
    min_exp?: SortOrder
  }

  export type jdsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    min_exp?: SortOrder
  }

  export type jdsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    min_exp?: SortOrder
  }

  export type jdsSumOrderByAggregateInput = {
    min_exp?: SortOrder
  }

  export type candidatesCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<candidatesCreateWithoutApplicationsInput, candidatesUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutApplicationsInput
    connect?: candidatesWhereUniqueInput
  }

  export type jdsCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<jdsCreateWithoutApplicationsInput, jdsUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: jdsCreateOrConnectWithoutApplicationsInput
    connect?: jdsWhereUniqueInput
  }

  export type candidatesUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<candidatesCreateWithoutApplicationsInput, candidatesUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutApplicationsInput
    upsert?: candidatesUpsertWithoutApplicationsInput
    connect?: candidatesWhereUniqueInput
    update?: XOR<XOR<candidatesUpdateToOneWithWhereWithoutApplicationsInput, candidatesUpdateWithoutApplicationsInput>, candidatesUncheckedUpdateWithoutApplicationsInput>
  }

  export type jdsUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<jdsCreateWithoutApplicationsInput, jdsUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: jdsCreateOrConnectWithoutApplicationsInput
    upsert?: jdsUpsertWithoutApplicationsInput
    connect?: jdsWhereUniqueInput
    update?: XOR<XOR<jdsUpdateToOneWithWhereWithoutApplicationsInput, jdsUpdateWithoutApplicationsInput>, jdsUncheckedUpdateWithoutApplicationsInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type candidatesCreateskillsInput = {
    set: string[]
  }

  export type applicationsCreateNestedManyWithoutCandidatesInput = {
    create?: XOR<applicationsCreateWithoutCandidatesInput, applicationsUncheckedCreateWithoutCandidatesInput> | applicationsCreateWithoutCandidatesInput[] | applicationsUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: applicationsCreateOrConnectWithoutCandidatesInput | applicationsCreateOrConnectWithoutCandidatesInput[]
    createMany?: applicationsCreateManyCandidatesInputEnvelope
    connect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
  }

  export type applicationsUncheckedCreateNestedManyWithoutCandidatesInput = {
    create?: XOR<applicationsCreateWithoutCandidatesInput, applicationsUncheckedCreateWithoutCandidatesInput> | applicationsCreateWithoutCandidatesInput[] | applicationsUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: applicationsCreateOrConnectWithoutCandidatesInput | applicationsCreateOrConnectWithoutCandidatesInput[]
    createMany?: applicationsCreateManyCandidatesInputEnvelope
    connect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type candidatesUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type applicationsUpdateManyWithoutCandidatesNestedInput = {
    create?: XOR<applicationsCreateWithoutCandidatesInput, applicationsUncheckedCreateWithoutCandidatesInput> | applicationsCreateWithoutCandidatesInput[] | applicationsUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: applicationsCreateOrConnectWithoutCandidatesInput | applicationsCreateOrConnectWithoutCandidatesInput[]
    upsert?: applicationsUpsertWithWhereUniqueWithoutCandidatesInput | applicationsUpsertWithWhereUniqueWithoutCandidatesInput[]
    createMany?: applicationsCreateManyCandidatesInputEnvelope
    set?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    disconnect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    delete?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    connect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    update?: applicationsUpdateWithWhereUniqueWithoutCandidatesInput | applicationsUpdateWithWhereUniqueWithoutCandidatesInput[]
    updateMany?: applicationsUpdateManyWithWhereWithoutCandidatesInput | applicationsUpdateManyWithWhereWithoutCandidatesInput[]
    deleteMany?: applicationsScalarWhereInput | applicationsScalarWhereInput[]
  }

  export type applicationsUncheckedUpdateManyWithoutCandidatesNestedInput = {
    create?: XOR<applicationsCreateWithoutCandidatesInput, applicationsUncheckedCreateWithoutCandidatesInput> | applicationsCreateWithoutCandidatesInput[] | applicationsUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: applicationsCreateOrConnectWithoutCandidatesInput | applicationsCreateOrConnectWithoutCandidatesInput[]
    upsert?: applicationsUpsertWithWhereUniqueWithoutCandidatesInput | applicationsUpsertWithWhereUniqueWithoutCandidatesInput[]
    createMany?: applicationsCreateManyCandidatesInputEnvelope
    set?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    disconnect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    delete?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    connect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    update?: applicationsUpdateWithWhereUniqueWithoutCandidatesInput | applicationsUpdateWithWhereUniqueWithoutCandidatesInput[]
    updateMany?: applicationsUpdateManyWithWhereWithoutCandidatesInput | applicationsUpdateManyWithWhereWithoutCandidatesInput[]
    deleteMany?: applicationsScalarWhereInput | applicationsScalarWhereInput[]
  }

  export type jdsCreateskillsInput = {
    set: string[]
  }

  export type applicationsCreateNestedManyWithoutJdsInput = {
    create?: XOR<applicationsCreateWithoutJdsInput, applicationsUncheckedCreateWithoutJdsInput> | applicationsCreateWithoutJdsInput[] | applicationsUncheckedCreateWithoutJdsInput[]
    connectOrCreate?: applicationsCreateOrConnectWithoutJdsInput | applicationsCreateOrConnectWithoutJdsInput[]
    createMany?: applicationsCreateManyJdsInputEnvelope
    connect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
  }

  export type applicationsUncheckedCreateNestedManyWithoutJdsInput = {
    create?: XOR<applicationsCreateWithoutJdsInput, applicationsUncheckedCreateWithoutJdsInput> | applicationsCreateWithoutJdsInput[] | applicationsUncheckedCreateWithoutJdsInput[]
    connectOrCreate?: applicationsCreateOrConnectWithoutJdsInput | applicationsCreateOrConnectWithoutJdsInput[]
    createMany?: applicationsCreateManyJdsInputEnvelope
    connect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
  }

  export type jdsUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type applicationsUpdateManyWithoutJdsNestedInput = {
    create?: XOR<applicationsCreateWithoutJdsInput, applicationsUncheckedCreateWithoutJdsInput> | applicationsCreateWithoutJdsInput[] | applicationsUncheckedCreateWithoutJdsInput[]
    connectOrCreate?: applicationsCreateOrConnectWithoutJdsInput | applicationsCreateOrConnectWithoutJdsInput[]
    upsert?: applicationsUpsertWithWhereUniqueWithoutJdsInput | applicationsUpsertWithWhereUniqueWithoutJdsInput[]
    createMany?: applicationsCreateManyJdsInputEnvelope
    set?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    disconnect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    delete?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    connect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    update?: applicationsUpdateWithWhereUniqueWithoutJdsInput | applicationsUpdateWithWhereUniqueWithoutJdsInput[]
    updateMany?: applicationsUpdateManyWithWhereWithoutJdsInput | applicationsUpdateManyWithWhereWithoutJdsInput[]
    deleteMany?: applicationsScalarWhereInput | applicationsScalarWhereInput[]
  }

  export type applicationsUncheckedUpdateManyWithoutJdsNestedInput = {
    create?: XOR<applicationsCreateWithoutJdsInput, applicationsUncheckedCreateWithoutJdsInput> | applicationsCreateWithoutJdsInput[] | applicationsUncheckedCreateWithoutJdsInput[]
    connectOrCreate?: applicationsCreateOrConnectWithoutJdsInput | applicationsCreateOrConnectWithoutJdsInput[]
    upsert?: applicationsUpsertWithWhereUniqueWithoutJdsInput | applicationsUpsertWithWhereUniqueWithoutJdsInput[]
    createMany?: applicationsCreateManyJdsInputEnvelope
    set?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    disconnect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    delete?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    connect?: applicationsWhereUniqueInput | applicationsWhereUniqueInput[]
    update?: applicationsUpdateWithWhereUniqueWithoutJdsInput | applicationsUpdateWithWhereUniqueWithoutJdsInput[]
    updateMany?: applicationsUpdateManyWithWhereWithoutJdsInput | applicationsUpdateManyWithWhereWithoutJdsInput[]
    deleteMany?: applicationsScalarWhereInput | applicationsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type candidatesCreateWithoutApplicationsInput = {
    id: string
    name: string
    total_exp: number
    skills?: candidatesCreateskillsInput | string[]
  }

  export type candidatesUncheckedCreateWithoutApplicationsInput = {
    id: string
    name: string
    total_exp: number
    skills?: candidatesCreateskillsInput | string[]
  }

  export type candidatesCreateOrConnectWithoutApplicationsInput = {
    where: candidatesWhereUniqueInput
    create: XOR<candidatesCreateWithoutApplicationsInput, candidatesUncheckedCreateWithoutApplicationsInput>
  }

  export type jdsCreateWithoutApplicationsInput = {
    id: string
    title: string
    min_exp: number
    skills?: jdsCreateskillsInput | string[]
  }

  export type jdsUncheckedCreateWithoutApplicationsInput = {
    id: string
    title: string
    min_exp: number
    skills?: jdsCreateskillsInput | string[]
  }

  export type jdsCreateOrConnectWithoutApplicationsInput = {
    where: jdsWhereUniqueInput
    create: XOR<jdsCreateWithoutApplicationsInput, jdsUncheckedCreateWithoutApplicationsInput>
  }

  export type candidatesUpsertWithoutApplicationsInput = {
    update: XOR<candidatesUpdateWithoutApplicationsInput, candidatesUncheckedUpdateWithoutApplicationsInput>
    create: XOR<candidatesCreateWithoutApplicationsInput, candidatesUncheckedCreateWithoutApplicationsInput>
    where?: candidatesWhereInput
  }

  export type candidatesUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: candidatesWhereInput
    data: XOR<candidatesUpdateWithoutApplicationsInput, candidatesUncheckedUpdateWithoutApplicationsInput>
  }

  export type candidatesUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_exp?: IntFieldUpdateOperationsInput | number
    skills?: candidatesUpdateskillsInput | string[]
  }

  export type candidatesUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_exp?: IntFieldUpdateOperationsInput | number
    skills?: candidatesUpdateskillsInput | string[]
  }

  export type jdsUpsertWithoutApplicationsInput = {
    update: XOR<jdsUpdateWithoutApplicationsInput, jdsUncheckedUpdateWithoutApplicationsInput>
    create: XOR<jdsCreateWithoutApplicationsInput, jdsUncheckedCreateWithoutApplicationsInput>
    where?: jdsWhereInput
  }

  export type jdsUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: jdsWhereInput
    data: XOR<jdsUpdateWithoutApplicationsInput, jdsUncheckedUpdateWithoutApplicationsInput>
  }

  export type jdsUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    min_exp?: IntFieldUpdateOperationsInput | number
    skills?: jdsUpdateskillsInput | string[]
  }

  export type jdsUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    min_exp?: IntFieldUpdateOperationsInput | number
    skills?: jdsUpdateskillsInput | string[]
  }

  export type applicationsCreateWithoutCandidatesInput = {
    jds: jdsCreateNestedOneWithoutApplicationsInput
  }

  export type applicationsUncheckedCreateWithoutCandidatesInput = {
    jd_id: string
  }

  export type applicationsCreateOrConnectWithoutCandidatesInput = {
    where: applicationsWhereUniqueInput
    create: XOR<applicationsCreateWithoutCandidatesInput, applicationsUncheckedCreateWithoutCandidatesInput>
  }

  export type applicationsCreateManyCandidatesInputEnvelope = {
    data: applicationsCreateManyCandidatesInput | applicationsCreateManyCandidatesInput[]
    skipDuplicates?: boolean
  }

  export type applicationsUpsertWithWhereUniqueWithoutCandidatesInput = {
    where: applicationsWhereUniqueInput
    update: XOR<applicationsUpdateWithoutCandidatesInput, applicationsUncheckedUpdateWithoutCandidatesInput>
    create: XOR<applicationsCreateWithoutCandidatesInput, applicationsUncheckedCreateWithoutCandidatesInput>
  }

  export type applicationsUpdateWithWhereUniqueWithoutCandidatesInput = {
    where: applicationsWhereUniqueInput
    data: XOR<applicationsUpdateWithoutCandidatesInput, applicationsUncheckedUpdateWithoutCandidatesInput>
  }

  export type applicationsUpdateManyWithWhereWithoutCandidatesInput = {
    where: applicationsScalarWhereInput
    data: XOR<applicationsUpdateManyMutationInput, applicationsUncheckedUpdateManyWithoutCandidatesInput>
  }

  export type applicationsScalarWhereInput = {
    AND?: applicationsScalarWhereInput | applicationsScalarWhereInput[]
    OR?: applicationsScalarWhereInput[]
    NOT?: applicationsScalarWhereInput | applicationsScalarWhereInput[]
    jd_id?: UuidFilter<"applications"> | string
    candidate_id?: UuidFilter<"applications"> | string
  }

  export type applicationsCreateWithoutJdsInput = {
    candidates: candidatesCreateNestedOneWithoutApplicationsInput
  }

  export type applicationsUncheckedCreateWithoutJdsInput = {
    candidate_id: string
  }

  export type applicationsCreateOrConnectWithoutJdsInput = {
    where: applicationsWhereUniqueInput
    create: XOR<applicationsCreateWithoutJdsInput, applicationsUncheckedCreateWithoutJdsInput>
  }

  export type applicationsCreateManyJdsInputEnvelope = {
    data: applicationsCreateManyJdsInput | applicationsCreateManyJdsInput[]
    skipDuplicates?: boolean
  }

  export type applicationsUpsertWithWhereUniqueWithoutJdsInput = {
    where: applicationsWhereUniqueInput
    update: XOR<applicationsUpdateWithoutJdsInput, applicationsUncheckedUpdateWithoutJdsInput>
    create: XOR<applicationsCreateWithoutJdsInput, applicationsUncheckedCreateWithoutJdsInput>
  }

  export type applicationsUpdateWithWhereUniqueWithoutJdsInput = {
    where: applicationsWhereUniqueInput
    data: XOR<applicationsUpdateWithoutJdsInput, applicationsUncheckedUpdateWithoutJdsInput>
  }

  export type applicationsUpdateManyWithWhereWithoutJdsInput = {
    where: applicationsScalarWhereInput
    data: XOR<applicationsUpdateManyMutationInput, applicationsUncheckedUpdateManyWithoutJdsInput>
  }

  export type applicationsCreateManyCandidatesInput = {
    jd_id: string
  }

  export type applicationsUpdateWithoutCandidatesInput = {
    jds?: jdsUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type applicationsUncheckedUpdateWithoutCandidatesInput = {
    jd_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationsUncheckedUpdateManyWithoutCandidatesInput = {
    jd_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationsCreateManyJdsInput = {
    candidate_id: string
  }

  export type applicationsUpdateWithoutJdsInput = {
    candidates?: candidatesUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type applicationsUncheckedUpdateWithoutJdsInput = {
    candidate_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationsUncheckedUpdateManyWithoutJdsInput = {
    candidate_id?: StringFieldUpdateOperationsInput | string
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