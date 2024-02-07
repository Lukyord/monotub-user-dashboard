
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
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>
/**
 * Model Monotub
 * 
 */
export type Monotub = $Result.DefaultSelection<Prisma.$MonotubPayload>
/**
 * Model TemperatureHumidity
 * 
 */
export type TemperatureHumidity = $Result.DefaultSelection<Prisma.$TemperatureHumidityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  CLOSED: 'CLOSED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Issues
 * const issues = await prisma.issue.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Issues
   * const issues = await prisma.issue.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs>;

  /**
   * `prisma.monotub`: Exposes CRUD operations for the **Monotub** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monotubs
    * const monotubs = await prisma.monotub.findMany()
    * ```
    */
  get monotub(): Prisma.MonotubDelegate<ExtArgs>;

  /**
   * `prisma.temperatureHumidity`: Exposes CRUD operations for the **TemperatureHumidity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemperatureHumidities
    * const temperatureHumidities = await prisma.temperatureHumidity.findMany()
    * ```
    */
  get temperatureHumidity(): Prisma.TemperatureHumidityDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Issue: 'Issue',
    Monotub: 'Monotub',
    TemperatureHumidity: 'TemperatureHumidity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'issue' | 'monotub' | 'temperatureHumidity'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>,
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
          }
        }
      }
      Monotub: {
        payload: Prisma.$MonotubPayload<ExtArgs>
        fields: Prisma.MonotubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonotubFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonotubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonotubFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonotubPayload>
          }
          findFirst: {
            args: Prisma.MonotubFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonotubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonotubFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonotubPayload>
          }
          findMany: {
            args: Prisma.MonotubFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonotubPayload>[]
          }
          create: {
            args: Prisma.MonotubCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonotubPayload>
          }
          createMany: {
            args: Prisma.MonotubCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MonotubDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonotubPayload>
          }
          update: {
            args: Prisma.MonotubUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonotubPayload>
          }
          deleteMany: {
            args: Prisma.MonotubDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MonotubUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MonotubUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonotubPayload>
          }
          aggregate: {
            args: Prisma.MonotubAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMonotub>
          }
          groupBy: {
            args: Prisma.MonotubGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MonotubGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonotubCountArgs<ExtArgs>,
            result: $Utils.Optional<MonotubCountAggregateOutputType> | number
          }
        }
      }
      TemperatureHumidity: {
        payload: Prisma.$TemperatureHumidityPayload<ExtArgs>
        fields: Prisma.TemperatureHumidityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemperatureHumidityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureHumidityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemperatureHumidityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureHumidityPayload>
          }
          findFirst: {
            args: Prisma.TemperatureHumidityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureHumidityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemperatureHumidityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureHumidityPayload>
          }
          findMany: {
            args: Prisma.TemperatureHumidityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureHumidityPayload>[]
          }
          create: {
            args: Prisma.TemperatureHumidityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureHumidityPayload>
          }
          createMany: {
            args: Prisma.TemperatureHumidityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TemperatureHumidityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureHumidityPayload>
          }
          update: {
            args: Prisma.TemperatureHumidityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureHumidityPayload>
          }
          deleteMany: {
            args: Prisma.TemperatureHumidityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TemperatureHumidityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TemperatureHumidityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureHumidityPayload>
          }
          aggregate: {
            args: Prisma.TemperatureHumidityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTemperatureHumidity>
          }
          groupBy: {
            args: Prisma.TemperatureHumidityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TemperatureHumidityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemperatureHumidityCountArgs<ExtArgs>,
            result: $Utils.Optional<TemperatureHumidityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MonotubCountOutputType
   */

  export type MonotubCountOutputType = {
    tempHumidRecords: number
  }

  export type MonotubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempHumidRecords?: boolean | MonotubCountOutputTypeCountTempHumidRecordsArgs
  }

  // Custom InputTypes

  /**
   * MonotubCountOutputType without action
   */
  export type MonotubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonotubCountOutputType
     */
    select?: MonotubCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MonotubCountOutputType without action
   */
  export type MonotubCountOutputTypeCountTempHumidRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemperatureHumidityWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueAvgAggregateOutputType = {
    id: number | null
  }

  export type IssueSumAggregateOutputType = {
    id: number | null
  }

  export type IssueMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssueMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssueCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IssueAvgAggregateInputType = {
    id?: true
  }

  export type IssueSumAggregateInputType = {
    id?: true
  }

  export type IssueMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssueMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssueCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _avg?: IssueAvgAggregateInputType
    _sum?: IssueSumAggregateInputType
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    id: number
    title: string
    description: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $IssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }


  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IssueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Issue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IssueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IssueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
    **/
    create<T extends IssueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueCreateArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Issues.
     *     @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     *     @example
     *     // Create many Issues
     *     const issue = await prisma.issue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IssueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
    **/
    delete<T extends IssueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IssueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IssueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IssueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
    **/
    upsert<T extends IssueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
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
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Issue model
   */ 
  interface IssueFieldRefs {
    readonly id: FieldRef<"Issue", 'Int'>
    readonly title: FieldRef<"Issue", 'String'>
    readonly description: FieldRef<"Issue", 'String'>
    readonly status: FieldRef<"Issue", 'Status'>
    readonly createdAt: FieldRef<"Issue", 'DateTime'>
    readonly updatedAt: FieldRef<"Issue", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }


  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }


  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }


  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }


  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }


  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }


  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }


  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
  }


  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }


  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }


  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
  }


  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
  }



  /**
   * Model Monotub
   */

  export type AggregateMonotub = {
    _count: MonotubCountAggregateOutputType | null
    _min: MonotubMinAggregateOutputType | null
    _max: MonotubMaxAggregateOutputType | null
  }

  export type MonotubMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type MonotubMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type MonotubCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type MonotubMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type MonotubMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type MonotubCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type MonotubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monotub to aggregate.
     */
    where?: MonotubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monotubs to fetch.
     */
    orderBy?: MonotubOrderByWithRelationInput | MonotubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonotubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monotubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monotubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monotubs
    **/
    _count?: true | MonotubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonotubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonotubMaxAggregateInputType
  }

  export type GetMonotubAggregateType<T extends MonotubAggregateArgs> = {
        [P in keyof T & keyof AggregateMonotub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonotub[P]>
      : GetScalarType<T[P], AggregateMonotub[P]>
  }




  export type MonotubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonotubWhereInput
    orderBy?: MonotubOrderByWithAggregationInput | MonotubOrderByWithAggregationInput[]
    by: MonotubScalarFieldEnum[] | MonotubScalarFieldEnum
    having?: MonotubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonotubCountAggregateInputType | true
    _min?: MonotubMinAggregateInputType
    _max?: MonotubMaxAggregateInputType
  }

  export type MonotubGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: MonotubCountAggregateOutputType | null
    _min: MonotubMinAggregateOutputType | null
    _max: MonotubMaxAggregateOutputType | null
  }

  type GetMonotubGroupByPayload<T extends MonotubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonotubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonotubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonotubGroupByOutputType[P]>
            : GetScalarType<T[P], MonotubGroupByOutputType[P]>
        }
      >
    >


  export type MonotubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    tempHumidRecords?: boolean | Monotub$tempHumidRecordsArgs<ExtArgs>
    _count?: boolean | MonotubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monotub"]>

  export type MonotubSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type MonotubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempHumidRecords?: boolean | Monotub$tempHumidRecordsArgs<ExtArgs>
    _count?: boolean | MonotubCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MonotubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monotub"
    objects: {
      tempHumidRecords: Prisma.$TemperatureHumidityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["monotub"]>
    composites: {}
  }


  type MonotubGetPayload<S extends boolean | null | undefined | MonotubDefaultArgs> = $Result.GetResult<Prisma.$MonotubPayload, S>

  type MonotubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonotubFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonotubCountAggregateInputType | true
    }

  export interface MonotubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monotub'], meta: { name: 'Monotub' } }
    /**
     * Find zero or one Monotub that matches the filter.
     * @param {MonotubFindUniqueArgs} args - Arguments to find a Monotub
     * @example
     * // Get one Monotub
     * const monotub = await prisma.monotub.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MonotubFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MonotubFindUniqueArgs<ExtArgs>>
    ): Prisma__MonotubClient<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Monotub that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MonotubFindUniqueOrThrowArgs} args - Arguments to find a Monotub
     * @example
     * // Get one Monotub
     * const monotub = await prisma.monotub.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MonotubFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonotubFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MonotubClient<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Monotub that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonotubFindFirstArgs} args - Arguments to find a Monotub
     * @example
     * // Get one Monotub
     * const monotub = await prisma.monotub.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MonotubFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MonotubFindFirstArgs<ExtArgs>>
    ): Prisma__MonotubClient<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Monotub that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonotubFindFirstOrThrowArgs} args - Arguments to find a Monotub
     * @example
     * // Get one Monotub
     * const monotub = await prisma.monotub.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MonotubFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonotubFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MonotubClient<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Monotubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonotubFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monotubs
     * const monotubs = await prisma.monotub.findMany()
     * 
     * // Get first 10 Monotubs
     * const monotubs = await prisma.monotub.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monotubWithIdOnly = await prisma.monotub.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MonotubFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonotubFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Monotub.
     * @param {MonotubCreateArgs} args - Arguments to create a Monotub.
     * @example
     * // Create one Monotub
     * const Monotub = await prisma.monotub.create({
     *   data: {
     *     // ... data to create a Monotub
     *   }
     * })
     * 
    **/
    create<T extends MonotubCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MonotubCreateArgs<ExtArgs>>
    ): Prisma__MonotubClient<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Monotubs.
     *     @param {MonotubCreateManyArgs} args - Arguments to create many Monotubs.
     *     @example
     *     // Create many Monotubs
     *     const monotub = await prisma.monotub.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MonotubCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonotubCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Monotub.
     * @param {MonotubDeleteArgs} args - Arguments to delete one Monotub.
     * @example
     * // Delete one Monotub
     * const Monotub = await prisma.monotub.delete({
     *   where: {
     *     // ... filter to delete one Monotub
     *   }
     * })
     * 
    **/
    delete<T extends MonotubDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MonotubDeleteArgs<ExtArgs>>
    ): Prisma__MonotubClient<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Monotub.
     * @param {MonotubUpdateArgs} args - Arguments to update one Monotub.
     * @example
     * // Update one Monotub
     * const monotub = await prisma.monotub.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MonotubUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MonotubUpdateArgs<ExtArgs>>
    ): Prisma__MonotubClient<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Monotubs.
     * @param {MonotubDeleteManyArgs} args - Arguments to filter Monotubs to delete.
     * @example
     * // Delete a few Monotubs
     * const { count } = await prisma.monotub.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MonotubDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonotubDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monotubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonotubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monotubs
     * const monotub = await prisma.monotub.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MonotubUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MonotubUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Monotub.
     * @param {MonotubUpsertArgs} args - Arguments to update or create a Monotub.
     * @example
     * // Update or create a Monotub
     * const monotub = await prisma.monotub.upsert({
     *   create: {
     *     // ... data to create a Monotub
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monotub we want to update
     *   }
     * })
    **/
    upsert<T extends MonotubUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MonotubUpsertArgs<ExtArgs>>
    ): Prisma__MonotubClient<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Monotubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonotubCountArgs} args - Arguments to filter Monotubs to count.
     * @example
     * // Count the number of Monotubs
     * const count = await prisma.monotub.count({
     *   where: {
     *     // ... the filter for the Monotubs we want to count
     *   }
     * })
    **/
    count<T extends MonotubCountArgs>(
      args?: Subset<T, MonotubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonotubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monotub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonotubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonotubAggregateArgs>(args: Subset<T, MonotubAggregateArgs>): Prisma.PrismaPromise<GetMonotubAggregateType<T>>

    /**
     * Group by Monotub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonotubGroupByArgs} args - Group by arguments.
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
      T extends MonotubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonotubGroupByArgs['orderBy'] }
        : { orderBy?: MonotubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonotubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonotubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monotub model
   */
  readonly fields: MonotubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monotub.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonotubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tempHumidRecords<T extends Monotub$tempHumidRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Monotub$tempHumidRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Monotub model
   */ 
  interface MonotubFieldRefs {
    readonly id: FieldRef<"Monotub", 'String'>
    readonly name: FieldRef<"Monotub", 'String'>
    readonly createdAt: FieldRef<"Monotub", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Monotub findUnique
   */
  export type MonotubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
    /**
     * Filter, which Monotub to fetch.
     */
    where: MonotubWhereUniqueInput
  }


  /**
   * Monotub findUniqueOrThrow
   */
  export type MonotubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
    /**
     * Filter, which Monotub to fetch.
     */
    where: MonotubWhereUniqueInput
  }


  /**
   * Monotub findFirst
   */
  export type MonotubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
    /**
     * Filter, which Monotub to fetch.
     */
    where?: MonotubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monotubs to fetch.
     */
    orderBy?: MonotubOrderByWithRelationInput | MonotubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monotubs.
     */
    cursor?: MonotubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monotubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monotubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monotubs.
     */
    distinct?: MonotubScalarFieldEnum | MonotubScalarFieldEnum[]
  }


  /**
   * Monotub findFirstOrThrow
   */
  export type MonotubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
    /**
     * Filter, which Monotub to fetch.
     */
    where?: MonotubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monotubs to fetch.
     */
    orderBy?: MonotubOrderByWithRelationInput | MonotubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monotubs.
     */
    cursor?: MonotubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monotubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monotubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monotubs.
     */
    distinct?: MonotubScalarFieldEnum | MonotubScalarFieldEnum[]
  }


  /**
   * Monotub findMany
   */
  export type MonotubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
    /**
     * Filter, which Monotubs to fetch.
     */
    where?: MonotubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monotubs to fetch.
     */
    orderBy?: MonotubOrderByWithRelationInput | MonotubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monotubs.
     */
    cursor?: MonotubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monotubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monotubs.
     */
    skip?: number
    distinct?: MonotubScalarFieldEnum | MonotubScalarFieldEnum[]
  }


  /**
   * Monotub create
   */
  export type MonotubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
    /**
     * The data needed to create a Monotub.
     */
    data: XOR<MonotubCreateInput, MonotubUncheckedCreateInput>
  }


  /**
   * Monotub createMany
   */
  export type MonotubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monotubs.
     */
    data: MonotubCreateManyInput | MonotubCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Monotub update
   */
  export type MonotubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
    /**
     * The data needed to update a Monotub.
     */
    data: XOR<MonotubUpdateInput, MonotubUncheckedUpdateInput>
    /**
     * Choose, which Monotub to update.
     */
    where: MonotubWhereUniqueInput
  }


  /**
   * Monotub updateMany
   */
  export type MonotubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monotubs.
     */
    data: XOR<MonotubUpdateManyMutationInput, MonotubUncheckedUpdateManyInput>
    /**
     * Filter which Monotubs to update
     */
    where?: MonotubWhereInput
  }


  /**
   * Monotub upsert
   */
  export type MonotubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
    /**
     * The filter to search for the Monotub to update in case it exists.
     */
    where: MonotubWhereUniqueInput
    /**
     * In case the Monotub found by the `where` argument doesn't exist, create a new Monotub with this data.
     */
    create: XOR<MonotubCreateInput, MonotubUncheckedCreateInput>
    /**
     * In case the Monotub was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonotubUpdateInput, MonotubUncheckedUpdateInput>
  }


  /**
   * Monotub delete
   */
  export type MonotubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
    /**
     * Filter which Monotub to delete.
     */
    where: MonotubWhereUniqueInput
  }


  /**
   * Monotub deleteMany
   */
  export type MonotubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monotubs to delete
     */
    where?: MonotubWhereInput
  }


  /**
   * Monotub.tempHumidRecords
   */
  export type Monotub$tempHumidRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    where?: TemperatureHumidityWhereInput
    orderBy?: TemperatureHumidityOrderByWithRelationInput | TemperatureHumidityOrderByWithRelationInput[]
    cursor?: TemperatureHumidityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemperatureHumidityScalarFieldEnum | TemperatureHumidityScalarFieldEnum[]
  }


  /**
   * Monotub without action
   */
  export type MonotubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monotub
     */
    select?: MonotubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonotubInclude<ExtArgs> | null
  }



  /**
   * Model TemperatureHumidity
   */

  export type AggregateTemperatureHumidity = {
    _count: TemperatureHumidityCountAggregateOutputType | null
    _avg: TemperatureHumidityAvgAggregateOutputType | null
    _sum: TemperatureHumiditySumAggregateOutputType | null
    _min: TemperatureHumidityMinAggregateOutputType | null
    _max: TemperatureHumidityMaxAggregateOutputType | null
  }

  export type TemperatureHumidityAvgAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
    hourOfDay: number | null
  }

  export type TemperatureHumiditySumAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
    hourOfDay: number | null
  }

  export type TemperatureHumidityMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    temperature: number | null
    humidity: number | null
    hourOfDay: number | null
    date: string | null
    monotubId: string | null
  }

  export type TemperatureHumidityMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    temperature: number | null
    humidity: number | null
    hourOfDay: number | null
    date: string | null
    monotubId: string | null
  }

  export type TemperatureHumidityCountAggregateOutputType = {
    id: number
    createdAt: number
    temperature: number
    humidity: number
    hourOfDay: number
    date: number
    monotubId: number
    _all: number
  }


  export type TemperatureHumidityAvgAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    hourOfDay?: true
  }

  export type TemperatureHumiditySumAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    hourOfDay?: true
  }

  export type TemperatureHumidityMinAggregateInputType = {
    id?: true
    createdAt?: true
    temperature?: true
    humidity?: true
    hourOfDay?: true
    date?: true
    monotubId?: true
  }

  export type TemperatureHumidityMaxAggregateInputType = {
    id?: true
    createdAt?: true
    temperature?: true
    humidity?: true
    hourOfDay?: true
    date?: true
    monotubId?: true
  }

  export type TemperatureHumidityCountAggregateInputType = {
    id?: true
    createdAt?: true
    temperature?: true
    humidity?: true
    hourOfDay?: true
    date?: true
    monotubId?: true
    _all?: true
  }

  export type TemperatureHumidityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemperatureHumidity to aggregate.
     */
    where?: TemperatureHumidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureHumidities to fetch.
     */
    orderBy?: TemperatureHumidityOrderByWithRelationInput | TemperatureHumidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemperatureHumidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureHumidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureHumidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemperatureHumidities
    **/
    _count?: true | TemperatureHumidityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemperatureHumidityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemperatureHumiditySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemperatureHumidityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemperatureHumidityMaxAggregateInputType
  }

  export type GetTemperatureHumidityAggregateType<T extends TemperatureHumidityAggregateArgs> = {
        [P in keyof T & keyof AggregateTemperatureHumidity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemperatureHumidity[P]>
      : GetScalarType<T[P], AggregateTemperatureHumidity[P]>
  }




  export type TemperatureHumidityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemperatureHumidityWhereInput
    orderBy?: TemperatureHumidityOrderByWithAggregationInput | TemperatureHumidityOrderByWithAggregationInput[]
    by: TemperatureHumidityScalarFieldEnum[] | TemperatureHumidityScalarFieldEnum
    having?: TemperatureHumidityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemperatureHumidityCountAggregateInputType | true
    _avg?: TemperatureHumidityAvgAggregateInputType
    _sum?: TemperatureHumiditySumAggregateInputType
    _min?: TemperatureHumidityMinAggregateInputType
    _max?: TemperatureHumidityMaxAggregateInputType
  }

  export type TemperatureHumidityGroupByOutputType = {
    id: number
    createdAt: Date
    temperature: number
    humidity: number
    hourOfDay: number
    date: string
    monotubId: string
    _count: TemperatureHumidityCountAggregateOutputType | null
    _avg: TemperatureHumidityAvgAggregateOutputType | null
    _sum: TemperatureHumiditySumAggregateOutputType | null
    _min: TemperatureHumidityMinAggregateOutputType | null
    _max: TemperatureHumidityMaxAggregateOutputType | null
  }

  type GetTemperatureHumidityGroupByPayload<T extends TemperatureHumidityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemperatureHumidityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemperatureHumidityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemperatureHumidityGroupByOutputType[P]>
            : GetScalarType<T[P], TemperatureHumidityGroupByOutputType[P]>
        }
      >
    >


  export type TemperatureHumiditySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    temperature?: boolean
    humidity?: boolean
    hourOfDay?: boolean
    date?: boolean
    monotubId?: boolean
    monotub?: boolean | MonotubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temperatureHumidity"]>

  export type TemperatureHumiditySelectScalar = {
    id?: boolean
    createdAt?: boolean
    temperature?: boolean
    humidity?: boolean
    hourOfDay?: boolean
    date?: boolean
    monotubId?: boolean
  }

  export type TemperatureHumidityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monotub?: boolean | MonotubDefaultArgs<ExtArgs>
  }


  export type $TemperatureHumidityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemperatureHumidity"
    objects: {
      monotub: Prisma.$MonotubPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      temperature: number
      humidity: number
      hourOfDay: number
      date: string
      monotubId: string
    }, ExtArgs["result"]["temperatureHumidity"]>
    composites: {}
  }


  type TemperatureHumidityGetPayload<S extends boolean | null | undefined | TemperatureHumidityDefaultArgs> = $Result.GetResult<Prisma.$TemperatureHumidityPayload, S>

  type TemperatureHumidityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemperatureHumidityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemperatureHumidityCountAggregateInputType | true
    }

  export interface TemperatureHumidityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemperatureHumidity'], meta: { name: 'TemperatureHumidity' } }
    /**
     * Find zero or one TemperatureHumidity that matches the filter.
     * @param {TemperatureHumidityFindUniqueArgs} args - Arguments to find a TemperatureHumidity
     * @example
     * // Get one TemperatureHumidity
     * const temperatureHumidity = await prisma.temperatureHumidity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TemperatureHumidityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureHumidityFindUniqueArgs<ExtArgs>>
    ): Prisma__TemperatureHumidityClient<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TemperatureHumidity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TemperatureHumidityFindUniqueOrThrowArgs} args - Arguments to find a TemperatureHumidity
     * @example
     * // Get one TemperatureHumidity
     * const temperatureHumidity = await prisma.temperatureHumidity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TemperatureHumidityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureHumidityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TemperatureHumidityClient<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TemperatureHumidity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureHumidityFindFirstArgs} args - Arguments to find a TemperatureHumidity
     * @example
     * // Get one TemperatureHumidity
     * const temperatureHumidity = await prisma.temperatureHumidity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TemperatureHumidityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureHumidityFindFirstArgs<ExtArgs>>
    ): Prisma__TemperatureHumidityClient<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TemperatureHumidity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureHumidityFindFirstOrThrowArgs} args - Arguments to find a TemperatureHumidity
     * @example
     * // Get one TemperatureHumidity
     * const temperatureHumidity = await prisma.temperatureHumidity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TemperatureHumidityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureHumidityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TemperatureHumidityClient<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TemperatureHumidities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureHumidityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemperatureHumidities
     * const temperatureHumidities = await prisma.temperatureHumidity.findMany()
     * 
     * // Get first 10 TemperatureHumidities
     * const temperatureHumidities = await prisma.temperatureHumidity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temperatureHumidityWithIdOnly = await prisma.temperatureHumidity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TemperatureHumidityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureHumidityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TemperatureHumidity.
     * @param {TemperatureHumidityCreateArgs} args - Arguments to create a TemperatureHumidity.
     * @example
     * // Create one TemperatureHumidity
     * const TemperatureHumidity = await prisma.temperatureHumidity.create({
     *   data: {
     *     // ... data to create a TemperatureHumidity
     *   }
     * })
     * 
    **/
    create<T extends TemperatureHumidityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureHumidityCreateArgs<ExtArgs>>
    ): Prisma__TemperatureHumidityClient<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TemperatureHumidities.
     *     @param {TemperatureHumidityCreateManyArgs} args - Arguments to create many TemperatureHumidities.
     *     @example
     *     // Create many TemperatureHumidities
     *     const temperatureHumidity = await prisma.temperatureHumidity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TemperatureHumidityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureHumidityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TemperatureHumidity.
     * @param {TemperatureHumidityDeleteArgs} args - Arguments to delete one TemperatureHumidity.
     * @example
     * // Delete one TemperatureHumidity
     * const TemperatureHumidity = await prisma.temperatureHumidity.delete({
     *   where: {
     *     // ... filter to delete one TemperatureHumidity
     *   }
     * })
     * 
    **/
    delete<T extends TemperatureHumidityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureHumidityDeleteArgs<ExtArgs>>
    ): Prisma__TemperatureHumidityClient<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TemperatureHumidity.
     * @param {TemperatureHumidityUpdateArgs} args - Arguments to update one TemperatureHumidity.
     * @example
     * // Update one TemperatureHumidity
     * const temperatureHumidity = await prisma.temperatureHumidity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TemperatureHumidityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureHumidityUpdateArgs<ExtArgs>>
    ): Prisma__TemperatureHumidityClient<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TemperatureHumidities.
     * @param {TemperatureHumidityDeleteManyArgs} args - Arguments to filter TemperatureHumidities to delete.
     * @example
     * // Delete a few TemperatureHumidities
     * const { count } = await prisma.temperatureHumidity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TemperatureHumidityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureHumidityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemperatureHumidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureHumidityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemperatureHumidities
     * const temperatureHumidity = await prisma.temperatureHumidity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TemperatureHumidityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureHumidityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemperatureHumidity.
     * @param {TemperatureHumidityUpsertArgs} args - Arguments to update or create a TemperatureHumidity.
     * @example
     * // Update or create a TemperatureHumidity
     * const temperatureHumidity = await prisma.temperatureHumidity.upsert({
     *   create: {
     *     // ... data to create a TemperatureHumidity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemperatureHumidity we want to update
     *   }
     * })
    **/
    upsert<T extends TemperatureHumidityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureHumidityUpsertArgs<ExtArgs>>
    ): Prisma__TemperatureHumidityClient<$Result.GetResult<Prisma.$TemperatureHumidityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TemperatureHumidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureHumidityCountArgs} args - Arguments to filter TemperatureHumidities to count.
     * @example
     * // Count the number of TemperatureHumidities
     * const count = await prisma.temperatureHumidity.count({
     *   where: {
     *     // ... the filter for the TemperatureHumidities we want to count
     *   }
     * })
    **/
    count<T extends TemperatureHumidityCountArgs>(
      args?: Subset<T, TemperatureHumidityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemperatureHumidityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemperatureHumidity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureHumidityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemperatureHumidityAggregateArgs>(args: Subset<T, TemperatureHumidityAggregateArgs>): Prisma.PrismaPromise<GetTemperatureHumidityAggregateType<T>>

    /**
     * Group by TemperatureHumidity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureHumidityGroupByArgs} args - Group by arguments.
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
      T extends TemperatureHumidityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemperatureHumidityGroupByArgs['orderBy'] }
        : { orderBy?: TemperatureHumidityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemperatureHumidityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemperatureHumidityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemperatureHumidity model
   */
  readonly fields: TemperatureHumidityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemperatureHumidity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemperatureHumidityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    monotub<T extends MonotubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonotubDefaultArgs<ExtArgs>>): Prisma__MonotubClient<$Result.GetResult<Prisma.$MonotubPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TemperatureHumidity model
   */ 
  interface TemperatureHumidityFieldRefs {
    readonly id: FieldRef<"TemperatureHumidity", 'Int'>
    readonly createdAt: FieldRef<"TemperatureHumidity", 'DateTime'>
    readonly temperature: FieldRef<"TemperatureHumidity", 'Float'>
    readonly humidity: FieldRef<"TemperatureHumidity", 'Float'>
    readonly hourOfDay: FieldRef<"TemperatureHumidity", 'Int'>
    readonly date: FieldRef<"TemperatureHumidity", 'String'>
    readonly monotubId: FieldRef<"TemperatureHumidity", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TemperatureHumidity findUnique
   */
  export type TemperatureHumidityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureHumidity to fetch.
     */
    where: TemperatureHumidityWhereUniqueInput
  }


  /**
   * TemperatureHumidity findUniqueOrThrow
   */
  export type TemperatureHumidityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureHumidity to fetch.
     */
    where: TemperatureHumidityWhereUniqueInput
  }


  /**
   * TemperatureHumidity findFirst
   */
  export type TemperatureHumidityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureHumidity to fetch.
     */
    where?: TemperatureHumidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureHumidities to fetch.
     */
    orderBy?: TemperatureHumidityOrderByWithRelationInput | TemperatureHumidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemperatureHumidities.
     */
    cursor?: TemperatureHumidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureHumidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureHumidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemperatureHumidities.
     */
    distinct?: TemperatureHumidityScalarFieldEnum | TemperatureHumidityScalarFieldEnum[]
  }


  /**
   * TemperatureHumidity findFirstOrThrow
   */
  export type TemperatureHumidityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureHumidity to fetch.
     */
    where?: TemperatureHumidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureHumidities to fetch.
     */
    orderBy?: TemperatureHumidityOrderByWithRelationInput | TemperatureHumidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemperatureHumidities.
     */
    cursor?: TemperatureHumidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureHumidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureHumidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemperatureHumidities.
     */
    distinct?: TemperatureHumidityScalarFieldEnum | TemperatureHumidityScalarFieldEnum[]
  }


  /**
   * TemperatureHumidity findMany
   */
  export type TemperatureHumidityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureHumidities to fetch.
     */
    where?: TemperatureHumidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureHumidities to fetch.
     */
    orderBy?: TemperatureHumidityOrderByWithRelationInput | TemperatureHumidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemperatureHumidities.
     */
    cursor?: TemperatureHumidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureHumidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureHumidities.
     */
    skip?: number
    distinct?: TemperatureHumidityScalarFieldEnum | TemperatureHumidityScalarFieldEnum[]
  }


  /**
   * TemperatureHumidity create
   */
  export type TemperatureHumidityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    /**
     * The data needed to create a TemperatureHumidity.
     */
    data: XOR<TemperatureHumidityCreateInput, TemperatureHumidityUncheckedCreateInput>
  }


  /**
   * TemperatureHumidity createMany
   */
  export type TemperatureHumidityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemperatureHumidities.
     */
    data: TemperatureHumidityCreateManyInput | TemperatureHumidityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TemperatureHumidity update
   */
  export type TemperatureHumidityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    /**
     * The data needed to update a TemperatureHumidity.
     */
    data: XOR<TemperatureHumidityUpdateInput, TemperatureHumidityUncheckedUpdateInput>
    /**
     * Choose, which TemperatureHumidity to update.
     */
    where: TemperatureHumidityWhereUniqueInput
  }


  /**
   * TemperatureHumidity updateMany
   */
  export type TemperatureHumidityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemperatureHumidities.
     */
    data: XOR<TemperatureHumidityUpdateManyMutationInput, TemperatureHumidityUncheckedUpdateManyInput>
    /**
     * Filter which TemperatureHumidities to update
     */
    where?: TemperatureHumidityWhereInput
  }


  /**
   * TemperatureHumidity upsert
   */
  export type TemperatureHumidityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    /**
     * The filter to search for the TemperatureHumidity to update in case it exists.
     */
    where: TemperatureHumidityWhereUniqueInput
    /**
     * In case the TemperatureHumidity found by the `where` argument doesn't exist, create a new TemperatureHumidity with this data.
     */
    create: XOR<TemperatureHumidityCreateInput, TemperatureHumidityUncheckedCreateInput>
    /**
     * In case the TemperatureHumidity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemperatureHumidityUpdateInput, TemperatureHumidityUncheckedUpdateInput>
  }


  /**
   * TemperatureHumidity delete
   */
  export type TemperatureHumidityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
    /**
     * Filter which TemperatureHumidity to delete.
     */
    where: TemperatureHumidityWhereUniqueInput
  }


  /**
   * TemperatureHumidity deleteMany
   */
  export type TemperatureHumidityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemperatureHumidities to delete
     */
    where?: TemperatureHumidityWhereInput
  }


  /**
   * TemperatureHumidity without action
   */
  export type TemperatureHumidityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureHumidity
     */
    select?: TemperatureHumiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureHumidityInclude<ExtArgs> | null
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


  export const IssueScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


  export const MonotubScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type MonotubScalarFieldEnum = (typeof MonotubScalarFieldEnum)[keyof typeof MonotubScalarFieldEnum]


  export const TemperatureHumidityScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    temperature: 'temperature',
    humidity: 'humidity',
    hourOfDay: 'hourOfDay',
    date: 'date',
    monotubId: 'monotubId'
  };

  export type TemperatureHumidityScalarFieldEnum = (typeof TemperatureHumidityScalarFieldEnum)[keyof typeof TemperatureHumidityScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    id?: IntFilter<"Issue"> | number
    title?: StringFilter<"Issue"> | string
    description?: StringFilter<"Issue"> | string
    status?: EnumStatusFilter<"Issue"> | $Enums.Status
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
  }

  export type IssueOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    title?: StringFilter<"Issue"> | string
    description?: StringFilter<"Issue"> | string
    status?: EnumStatusFilter<"Issue"> | $Enums.Status
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
  }, "id">

  export type IssueOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IssueCountOrderByAggregateInput
    _avg?: IssueAvgOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
    _sum?: IssueSumOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Issue"> | number
    title?: StringWithAggregatesFilter<"Issue"> | string
    description?: StringWithAggregatesFilter<"Issue"> | string
    status?: EnumStatusWithAggregatesFilter<"Issue"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
  }

  export type MonotubWhereInput = {
    AND?: MonotubWhereInput | MonotubWhereInput[]
    OR?: MonotubWhereInput[]
    NOT?: MonotubWhereInput | MonotubWhereInput[]
    id?: StringFilter<"Monotub"> | string
    name?: StringFilter<"Monotub"> | string
    createdAt?: DateTimeFilter<"Monotub"> | Date | string
    tempHumidRecords?: TemperatureHumidityListRelationFilter
  }

  export type MonotubOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    tempHumidRecords?: TemperatureHumidityOrderByRelationAggregateInput
  }

  export type MonotubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonotubWhereInput | MonotubWhereInput[]
    OR?: MonotubWhereInput[]
    NOT?: MonotubWhereInput | MonotubWhereInput[]
    name?: StringFilter<"Monotub"> | string
    createdAt?: DateTimeFilter<"Monotub"> | Date | string
    tempHumidRecords?: TemperatureHumidityListRelationFilter
  }, "id">

  export type MonotubOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: MonotubCountOrderByAggregateInput
    _max?: MonotubMaxOrderByAggregateInput
    _min?: MonotubMinOrderByAggregateInput
  }

  export type MonotubScalarWhereWithAggregatesInput = {
    AND?: MonotubScalarWhereWithAggregatesInput | MonotubScalarWhereWithAggregatesInput[]
    OR?: MonotubScalarWhereWithAggregatesInput[]
    NOT?: MonotubScalarWhereWithAggregatesInput | MonotubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Monotub"> | string
    name?: StringWithAggregatesFilter<"Monotub"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Monotub"> | Date | string
  }

  export type TemperatureHumidityWhereInput = {
    AND?: TemperatureHumidityWhereInput | TemperatureHumidityWhereInput[]
    OR?: TemperatureHumidityWhereInput[]
    NOT?: TemperatureHumidityWhereInput | TemperatureHumidityWhereInput[]
    id?: IntFilter<"TemperatureHumidity"> | number
    createdAt?: DateTimeFilter<"TemperatureHumidity"> | Date | string
    temperature?: FloatFilter<"TemperatureHumidity"> | number
    humidity?: FloatFilter<"TemperatureHumidity"> | number
    hourOfDay?: IntFilter<"TemperatureHumidity"> | number
    date?: StringFilter<"TemperatureHumidity"> | string
    monotubId?: StringFilter<"TemperatureHumidity"> | string
    monotub?: XOR<MonotubRelationFilter, MonotubWhereInput>
  }

  export type TemperatureHumidityOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    hourOfDay?: SortOrder
    date?: SortOrder
    monotubId?: SortOrder
    monotub?: MonotubOrderByWithRelationInput
  }

  export type TemperatureHumidityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    monotubId_date_hourOfDay?: TemperatureHumidityMonotubIdDateHourOfDayCompoundUniqueInput
    AND?: TemperatureHumidityWhereInput | TemperatureHumidityWhereInput[]
    OR?: TemperatureHumidityWhereInput[]
    NOT?: TemperatureHumidityWhereInput | TemperatureHumidityWhereInput[]
    createdAt?: DateTimeFilter<"TemperatureHumidity"> | Date | string
    temperature?: FloatFilter<"TemperatureHumidity"> | number
    humidity?: FloatFilter<"TemperatureHumidity"> | number
    hourOfDay?: IntFilter<"TemperatureHumidity"> | number
    date?: StringFilter<"TemperatureHumidity"> | string
    monotubId?: StringFilter<"TemperatureHumidity"> | string
    monotub?: XOR<MonotubRelationFilter, MonotubWhereInput>
  }, "id" | "monotubId_date_hourOfDay">

  export type TemperatureHumidityOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    hourOfDay?: SortOrder
    date?: SortOrder
    monotubId?: SortOrder
    _count?: TemperatureHumidityCountOrderByAggregateInput
    _avg?: TemperatureHumidityAvgOrderByAggregateInput
    _max?: TemperatureHumidityMaxOrderByAggregateInput
    _min?: TemperatureHumidityMinOrderByAggregateInput
    _sum?: TemperatureHumiditySumOrderByAggregateInput
  }

  export type TemperatureHumidityScalarWhereWithAggregatesInput = {
    AND?: TemperatureHumidityScalarWhereWithAggregatesInput | TemperatureHumidityScalarWhereWithAggregatesInput[]
    OR?: TemperatureHumidityScalarWhereWithAggregatesInput[]
    NOT?: TemperatureHumidityScalarWhereWithAggregatesInput | TemperatureHumidityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TemperatureHumidity"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TemperatureHumidity"> | Date | string
    temperature?: FloatWithAggregatesFilter<"TemperatureHumidity"> | number
    humidity?: FloatWithAggregatesFilter<"TemperatureHumidity"> | number
    hourOfDay?: IntWithAggregatesFilter<"TemperatureHumidity"> | number
    date?: StringWithAggregatesFilter<"TemperatureHumidity"> | string
    monotubId?: StringWithAggregatesFilter<"TemperatureHumidity"> | string
  }

  export type IssueCreateInput = {
    title: string
    description: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssueUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssueUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueCreateManyInput = {
    id?: number
    title: string
    description: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssueUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonotubCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    tempHumidRecords?: TemperatureHumidityCreateNestedManyWithoutMonotubInput
  }

  export type MonotubUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    tempHumidRecords?: TemperatureHumidityUncheckedCreateNestedManyWithoutMonotubInput
  }

  export type MonotubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempHumidRecords?: TemperatureHumidityUpdateManyWithoutMonotubNestedInput
  }

  export type MonotubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempHumidRecords?: TemperatureHumidityUncheckedUpdateManyWithoutMonotubNestedInput
  }

  export type MonotubCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type MonotubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonotubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemperatureHumidityCreateInput = {
    createdAt?: Date | string
    temperature: number
    humidity: number
    hourOfDay: number
    date: string
    monotub: MonotubCreateNestedOneWithoutTempHumidRecordsInput
  }

  export type TemperatureHumidityUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    temperature: number
    humidity: number
    hourOfDay: number
    date: string
    monotubId: string
  }

  export type TemperatureHumidityUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    monotub?: MonotubUpdateOneRequiredWithoutTempHumidRecordsNestedInput
  }

  export type TemperatureHumidityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    monotubId?: StringFieldUpdateOperationsInput | string
  }

  export type TemperatureHumidityCreateManyInput = {
    id?: number
    createdAt?: Date | string
    temperature: number
    humidity: number
    hourOfDay: number
    date: string
    monotubId: string
  }

  export type TemperatureHumidityUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type TemperatureHumidityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    monotubId?: StringFieldUpdateOperationsInput | string
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type IssueCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type TemperatureHumidityListRelationFilter = {
    every?: TemperatureHumidityWhereInput
    some?: TemperatureHumidityWhereInput
    none?: TemperatureHumidityWhereInput
  }

  export type TemperatureHumidityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonotubCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MonotubMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MonotubMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MonotubRelationFilter = {
    is?: MonotubWhereInput
    isNot?: MonotubWhereInput
  }

  export type TemperatureHumidityMonotubIdDateHourOfDayCompoundUniqueInput = {
    monotubId: string
    date: string
    hourOfDay: number
  }

  export type TemperatureHumidityCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    hourOfDay?: SortOrder
    date?: SortOrder
    monotubId?: SortOrder
  }

  export type TemperatureHumidityAvgOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    hourOfDay?: SortOrder
  }

  export type TemperatureHumidityMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    hourOfDay?: SortOrder
    date?: SortOrder
    monotubId?: SortOrder
  }

  export type TemperatureHumidityMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    hourOfDay?: SortOrder
    date?: SortOrder
    monotubId?: SortOrder
  }

  export type TemperatureHumiditySumOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    hourOfDay?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TemperatureHumidityCreateNestedManyWithoutMonotubInput = {
    create?: XOR<TemperatureHumidityCreateWithoutMonotubInput, TemperatureHumidityUncheckedCreateWithoutMonotubInput> | TemperatureHumidityCreateWithoutMonotubInput[] | TemperatureHumidityUncheckedCreateWithoutMonotubInput[]
    connectOrCreate?: TemperatureHumidityCreateOrConnectWithoutMonotubInput | TemperatureHumidityCreateOrConnectWithoutMonotubInput[]
    createMany?: TemperatureHumidityCreateManyMonotubInputEnvelope
    connect?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
  }

  export type TemperatureHumidityUncheckedCreateNestedManyWithoutMonotubInput = {
    create?: XOR<TemperatureHumidityCreateWithoutMonotubInput, TemperatureHumidityUncheckedCreateWithoutMonotubInput> | TemperatureHumidityCreateWithoutMonotubInput[] | TemperatureHumidityUncheckedCreateWithoutMonotubInput[]
    connectOrCreate?: TemperatureHumidityCreateOrConnectWithoutMonotubInput | TemperatureHumidityCreateOrConnectWithoutMonotubInput[]
    createMany?: TemperatureHumidityCreateManyMonotubInputEnvelope
    connect?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
  }

  export type TemperatureHumidityUpdateManyWithoutMonotubNestedInput = {
    create?: XOR<TemperatureHumidityCreateWithoutMonotubInput, TemperatureHumidityUncheckedCreateWithoutMonotubInput> | TemperatureHumidityCreateWithoutMonotubInput[] | TemperatureHumidityUncheckedCreateWithoutMonotubInput[]
    connectOrCreate?: TemperatureHumidityCreateOrConnectWithoutMonotubInput | TemperatureHumidityCreateOrConnectWithoutMonotubInput[]
    upsert?: TemperatureHumidityUpsertWithWhereUniqueWithoutMonotubInput | TemperatureHumidityUpsertWithWhereUniqueWithoutMonotubInput[]
    createMany?: TemperatureHumidityCreateManyMonotubInputEnvelope
    set?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
    disconnect?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
    delete?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
    connect?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
    update?: TemperatureHumidityUpdateWithWhereUniqueWithoutMonotubInput | TemperatureHumidityUpdateWithWhereUniqueWithoutMonotubInput[]
    updateMany?: TemperatureHumidityUpdateManyWithWhereWithoutMonotubInput | TemperatureHumidityUpdateManyWithWhereWithoutMonotubInput[]
    deleteMany?: TemperatureHumidityScalarWhereInput | TemperatureHumidityScalarWhereInput[]
  }

  export type TemperatureHumidityUncheckedUpdateManyWithoutMonotubNestedInput = {
    create?: XOR<TemperatureHumidityCreateWithoutMonotubInput, TemperatureHumidityUncheckedCreateWithoutMonotubInput> | TemperatureHumidityCreateWithoutMonotubInput[] | TemperatureHumidityUncheckedCreateWithoutMonotubInput[]
    connectOrCreate?: TemperatureHumidityCreateOrConnectWithoutMonotubInput | TemperatureHumidityCreateOrConnectWithoutMonotubInput[]
    upsert?: TemperatureHumidityUpsertWithWhereUniqueWithoutMonotubInput | TemperatureHumidityUpsertWithWhereUniqueWithoutMonotubInput[]
    createMany?: TemperatureHumidityCreateManyMonotubInputEnvelope
    set?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
    disconnect?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
    delete?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
    connect?: TemperatureHumidityWhereUniqueInput | TemperatureHumidityWhereUniqueInput[]
    update?: TemperatureHumidityUpdateWithWhereUniqueWithoutMonotubInput | TemperatureHumidityUpdateWithWhereUniqueWithoutMonotubInput[]
    updateMany?: TemperatureHumidityUpdateManyWithWhereWithoutMonotubInput | TemperatureHumidityUpdateManyWithWhereWithoutMonotubInput[]
    deleteMany?: TemperatureHumidityScalarWhereInput | TemperatureHumidityScalarWhereInput[]
  }

  export type MonotubCreateNestedOneWithoutTempHumidRecordsInput = {
    create?: XOR<MonotubCreateWithoutTempHumidRecordsInput, MonotubUncheckedCreateWithoutTempHumidRecordsInput>
    connectOrCreate?: MonotubCreateOrConnectWithoutTempHumidRecordsInput
    connect?: MonotubWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonotubUpdateOneRequiredWithoutTempHumidRecordsNestedInput = {
    create?: XOR<MonotubCreateWithoutTempHumidRecordsInput, MonotubUncheckedCreateWithoutTempHumidRecordsInput>
    connectOrCreate?: MonotubCreateOrConnectWithoutTempHumidRecordsInput
    upsert?: MonotubUpsertWithoutTempHumidRecordsInput
    connect?: MonotubWhereUniqueInput
    update?: XOR<XOR<MonotubUpdateToOneWithWhereWithoutTempHumidRecordsInput, MonotubUpdateWithoutTempHumidRecordsInput>, MonotubUncheckedUpdateWithoutTempHumidRecordsInput>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TemperatureHumidityCreateWithoutMonotubInput = {
    createdAt?: Date | string
    temperature: number
    humidity: number
    hourOfDay: number
    date: string
  }

  export type TemperatureHumidityUncheckedCreateWithoutMonotubInput = {
    id?: number
    createdAt?: Date | string
    temperature: number
    humidity: number
    hourOfDay: number
    date: string
  }

  export type TemperatureHumidityCreateOrConnectWithoutMonotubInput = {
    where: TemperatureHumidityWhereUniqueInput
    create: XOR<TemperatureHumidityCreateWithoutMonotubInput, TemperatureHumidityUncheckedCreateWithoutMonotubInput>
  }

  export type TemperatureHumidityCreateManyMonotubInputEnvelope = {
    data: TemperatureHumidityCreateManyMonotubInput | TemperatureHumidityCreateManyMonotubInput[]
    skipDuplicates?: boolean
  }

  export type TemperatureHumidityUpsertWithWhereUniqueWithoutMonotubInput = {
    where: TemperatureHumidityWhereUniqueInput
    update: XOR<TemperatureHumidityUpdateWithoutMonotubInput, TemperatureHumidityUncheckedUpdateWithoutMonotubInput>
    create: XOR<TemperatureHumidityCreateWithoutMonotubInput, TemperatureHumidityUncheckedCreateWithoutMonotubInput>
  }

  export type TemperatureHumidityUpdateWithWhereUniqueWithoutMonotubInput = {
    where: TemperatureHumidityWhereUniqueInput
    data: XOR<TemperatureHumidityUpdateWithoutMonotubInput, TemperatureHumidityUncheckedUpdateWithoutMonotubInput>
  }

  export type TemperatureHumidityUpdateManyWithWhereWithoutMonotubInput = {
    where: TemperatureHumidityScalarWhereInput
    data: XOR<TemperatureHumidityUpdateManyMutationInput, TemperatureHumidityUncheckedUpdateManyWithoutMonotubInput>
  }

  export type TemperatureHumidityScalarWhereInput = {
    AND?: TemperatureHumidityScalarWhereInput | TemperatureHumidityScalarWhereInput[]
    OR?: TemperatureHumidityScalarWhereInput[]
    NOT?: TemperatureHumidityScalarWhereInput | TemperatureHumidityScalarWhereInput[]
    id?: IntFilter<"TemperatureHumidity"> | number
    createdAt?: DateTimeFilter<"TemperatureHumidity"> | Date | string
    temperature?: FloatFilter<"TemperatureHumidity"> | number
    humidity?: FloatFilter<"TemperatureHumidity"> | number
    hourOfDay?: IntFilter<"TemperatureHumidity"> | number
    date?: StringFilter<"TemperatureHumidity"> | string
    monotubId?: StringFilter<"TemperatureHumidity"> | string
  }

  export type MonotubCreateWithoutTempHumidRecordsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type MonotubUncheckedCreateWithoutTempHumidRecordsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type MonotubCreateOrConnectWithoutTempHumidRecordsInput = {
    where: MonotubWhereUniqueInput
    create: XOR<MonotubCreateWithoutTempHumidRecordsInput, MonotubUncheckedCreateWithoutTempHumidRecordsInput>
  }

  export type MonotubUpsertWithoutTempHumidRecordsInput = {
    update: XOR<MonotubUpdateWithoutTempHumidRecordsInput, MonotubUncheckedUpdateWithoutTempHumidRecordsInput>
    create: XOR<MonotubCreateWithoutTempHumidRecordsInput, MonotubUncheckedCreateWithoutTempHumidRecordsInput>
    where?: MonotubWhereInput
  }

  export type MonotubUpdateToOneWithWhereWithoutTempHumidRecordsInput = {
    where?: MonotubWhereInput
    data: XOR<MonotubUpdateWithoutTempHumidRecordsInput, MonotubUncheckedUpdateWithoutTempHumidRecordsInput>
  }

  export type MonotubUpdateWithoutTempHumidRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonotubUncheckedUpdateWithoutTempHumidRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemperatureHumidityCreateManyMonotubInput = {
    id?: number
    createdAt?: Date | string
    temperature: number
    humidity: number
    hourOfDay: number
    date: string
  }

  export type TemperatureHumidityUpdateWithoutMonotubInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type TemperatureHumidityUncheckedUpdateWithoutMonotubInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type TemperatureHumidityUncheckedUpdateManyWithoutMonotubInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    hourOfDay?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MonotubCountOutputTypeDefaultArgs instead
     */
    export type MonotubCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonotubCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IssueDefaultArgs instead
     */
    export type IssueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IssueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonotubDefaultArgs instead
     */
    export type MonotubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonotubDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemperatureHumidityDefaultArgs instead
     */
    export type TemperatureHumidityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemperatureHumidityDefaultArgs<ExtArgs>

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