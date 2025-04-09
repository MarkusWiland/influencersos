
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model PDF
 * 
 */
export type PDF = $Result.DefaultSelection<Prisma.$PDFPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model AI_Pitch
 * 
 */
export type AI_Pitch = $Result.DefaultSelection<Prisma.$AI_PitchPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Plan: {
  FREE: 'FREE',
  PRO: 'PRO',
  PREMIUM: 'PREMIUM'
};

export type Plan = (typeof Plan)[keyof typeof Plan]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Plan = $Enums.Plan

export const Plan: typeof $Enums.Plan

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.user.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pDF`: Exposes CRUD operations for the **PDF** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PDFS
    * const pDFS = await prisma.pDF.findMany()
    * ```
    */
  get pDF(): Prisma.PDFDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aI_Pitch`: Exposes CRUD operations for the **AI_Pitch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AI_Pitches
    * const aI_Pitches = await prisma.aI_Pitch.findMany()
    * ```
    */
  get aI_Pitch(): Prisma.AI_PitchDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Link: 'Link',
    PDF: 'PDF',
    ChatMessage: 'ChatMessage',
    Invoice: 'Invoice',
    AI_Pitch: 'AI_Pitch'
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
      modelProps: "user" | "link" | "pDF" | "chatMessage" | "invoice" | "aI_Pitch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      PDF: {
        payload: Prisma.$PDFPayload<ExtArgs>
        fields: Prisma.PDFFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PDFFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PDFFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          findFirst: {
            args: Prisma.PDFFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PDFFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          findMany: {
            args: Prisma.PDFFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>[]
          }
          create: {
            args: Prisma.PDFCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          createMany: {
            args: Prisma.PDFCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PDFCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>[]
          }
          delete: {
            args: Prisma.PDFDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          update: {
            args: Prisma.PDFUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          deleteMany: {
            args: Prisma.PDFDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PDFUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PDFUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>[]
          }
          upsert: {
            args: Prisma.PDFUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          aggregate: {
            args: Prisma.PDFAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePDF>
          }
          groupBy: {
            args: Prisma.PDFGroupByArgs<ExtArgs>
            result: $Utils.Optional<PDFGroupByOutputType>[]
          }
          count: {
            args: Prisma.PDFCountArgs<ExtArgs>
            result: $Utils.Optional<PDFCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      AI_Pitch: {
        payload: Prisma.$AI_PitchPayload<ExtArgs>
        fields: Prisma.AI_PitchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AI_PitchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AI_PitchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload>
          }
          findFirst: {
            args: Prisma.AI_PitchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AI_PitchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload>
          }
          findMany: {
            args: Prisma.AI_PitchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload>[]
          }
          create: {
            args: Prisma.AI_PitchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload>
          }
          createMany: {
            args: Prisma.AI_PitchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AI_PitchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload>[]
          }
          delete: {
            args: Prisma.AI_PitchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload>
          }
          update: {
            args: Prisma.AI_PitchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload>
          }
          deleteMany: {
            args: Prisma.AI_PitchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AI_PitchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AI_PitchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload>[]
          }
          upsert: {
            args: Prisma.AI_PitchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_PitchPayload>
          }
          aggregate: {
            args: Prisma.AI_PitchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAI_Pitch>
          }
          groupBy: {
            args: Prisma.AI_PitchGroupByArgs<ExtArgs>
            result: $Utils.Optional<AI_PitchGroupByOutputType>[]
          }
          count: {
            args: Prisma.AI_PitchCountArgs<ExtArgs>
            result: $Utils.Optional<AI_PitchCountAggregateOutputType> | number
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
    user?: UserOmit
    link?: LinkOmit
    pDF?: PDFOmit
    chatMessage?: ChatMessageOmit
    invoice?: InvoiceOmit
    aI_Pitch?: AI_PitchOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    links: number
    pdfs: number
    invoices: number
    aiPitches: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | UserCountOutputTypeCountLinksArgs
    pdfs?: boolean | UserCountOutputTypeCountPdfsArgs
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
    aiPitches?: boolean | UserCountOutputTypeCountAiPitchesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PDFWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiPitchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AI_PitchWhereInput
  }


  /**
   * Count Type PDFCountOutputType
   */

  export type PDFCountOutputType = {
    chatMessages: number
  }

  export type PDFCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessages?: boolean | PDFCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * PDFCountOutputType without action
   */
  export type PDFCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFCountOutputType
     */
    select?: PDFCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PDFCountOutputType without action
   */
  export type PDFCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    aiCredits: number | null
    pitchUsage: number | null
  }

  export type UserSumAggregateOutputType = {
    aiCredits: number | null
    pitchUsage: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    plan: $Enums.Plan | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    clerkId: string | null
    companyName: string | null
    companyOrgNr: string | null
    companyVat: string | null
    companyAddress: string | null
    aiCredits: number | null
    pitchUsage: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    plan: $Enums.Plan | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    clerkId: string | null
    companyName: string | null
    companyOrgNr: string | null
    companyVat: string | null
    companyAddress: string | null
    aiCredits: number | null
    pitchUsage: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    name: number
    bio: number
    avatarUrl: number
    plan: number
    createdAt: number
    updatedAt: number
    role: number
    clerkId: number
    companyName: number
    companyOrgNr: number
    companyVat: number
    companyAddress: number
    aiCredits: number
    pitchUsage: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    aiCredits?: true
    pitchUsage?: true
  }

  export type UserSumAggregateInputType = {
    aiCredits?: true
    pitchUsage?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    name?: true
    bio?: true
    avatarUrl?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    clerkId?: true
    companyName?: true
    companyOrgNr?: true
    companyVat?: true
    companyAddress?: true
    aiCredits?: true
    pitchUsage?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    name?: true
    bio?: true
    avatarUrl?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    clerkId?: true
    companyName?: true
    companyOrgNr?: true
    companyVat?: true
    companyAddress?: true
    aiCredits?: true
    pitchUsage?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    name?: true
    bio?: true
    avatarUrl?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    clerkId?: true
    companyName?: true
    companyOrgNr?: true
    companyVat?: true
    companyAddress?: true
    aiCredits?: true
    pitchUsage?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    name: string | null
    bio: string | null
    avatarUrl: string | null
    plan: $Enums.Plan
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    clerkId: string
    companyName: string | null
    companyOrgNr: string | null
    companyVat: string | null
    companyAddress: string | null
    aiCredits: number
    pitchUsage: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    clerkId?: boolean
    companyName?: boolean
    companyOrgNr?: boolean
    companyVat?: boolean
    companyAddress?: boolean
    aiCredits?: boolean
    pitchUsage?: boolean
    links?: boolean | User$linksArgs<ExtArgs>
    pdfs?: boolean | User$pdfsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    aiPitches?: boolean | User$aiPitchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    clerkId?: boolean
    companyName?: boolean
    companyOrgNr?: boolean
    companyVat?: boolean
    companyAddress?: boolean
    aiCredits?: boolean
    pitchUsage?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    clerkId?: boolean
    companyName?: boolean
    companyOrgNr?: boolean
    companyVat?: boolean
    companyAddress?: boolean
    aiCredits?: boolean
    pitchUsage?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    clerkId?: boolean
    companyName?: boolean
    companyOrgNr?: boolean
    companyVat?: boolean
    companyAddress?: boolean
    aiCredits?: boolean
    pitchUsage?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "name" | "bio" | "avatarUrl" | "plan" | "createdAt" | "updatedAt" | "role" | "clerkId" | "companyName" | "companyOrgNr" | "companyVat" | "companyAddress" | "aiCredits" | "pitchUsage", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | User$linksArgs<ExtArgs>
    pdfs?: boolean | User$pdfsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    aiPitches?: boolean | User$aiPitchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      links: Prisma.$LinkPayload<ExtArgs>[]
      pdfs: Prisma.$PDFPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      aiPitches: Prisma.$AI_PitchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      name: string | null
      bio: string | null
      avatarUrl: string | null
      plan: $Enums.Plan
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
      clerkId: string
      companyName: string | null
      companyOrgNr: string | null
      companyVat: string | null
      companyAddress: string | null
      aiCredits: number
      pitchUsage: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    links<T extends User$linksArgs<ExtArgs> = {}>(args?: Subset<T, User$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pdfs<T extends User$pdfsArgs<ExtArgs> = {}>(args?: Subset<T, User$pdfsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiPitches<T extends User$aiPitchesArgs<ExtArgs> = {}>(args?: Subset<T, User$aiPitchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly plan: FieldRef<"User", 'Plan'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly companyOrgNr: FieldRef<"User", 'String'>
    readonly companyVat: FieldRef<"User", 'String'>
    readonly companyAddress: FieldRef<"User", 'String'>
    readonly aiCredits: FieldRef<"User", 'Int'>
    readonly pitchUsage: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.links
   */
  export type User$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * User.pdfs
   */
  export type User$pdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    where?: PDFWhereInput
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    cursor?: PDFWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PDFScalarFieldEnum | PDFScalarFieldEnum[]
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * User.aiPitches
   */
  export type User$aiPitchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    where?: AI_PitchWhereInput
    orderBy?: AI_PitchOrderByWithRelationInput | AI_PitchOrderByWithRelationInput[]
    cursor?: AI_PitchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AI_PitchScalarFieldEnum | AI_PitchScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    title: number
    url: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LinkMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: string
    title: string
    url: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
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
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'String'>
    readonly title: FieldRef<"Link", 'String'>
    readonly url: FieldRef<"Link", 'String'>
    readonly userId: FieldRef<"Link", 'String'>
    readonly createdAt: FieldRef<"Link", 'DateTime'>
    readonly updatedAt: FieldRef<"Link", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model PDF
   */

  export type AggregatePDF = {
    _count: PDFCountAggregateOutputType | null
    _min: PDFMinAggregateOutputType | null
    _max: PDFMaxAggregateOutputType | null
  }

  export type PDFMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    summary: string | null
    type: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PDFMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    summary: string | null
    type: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PDFCountAggregateOutputType = {
    id: number
    name: number
    url: number
    summary: number
    type: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PDFMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    summary?: true
    type?: true
    userId?: true
    createdAt?: true
  }

  export type PDFMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    summary?: true
    type?: true
    userId?: true
    createdAt?: true
  }

  export type PDFCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    summary?: true
    type?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PDFAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PDF to aggregate.
     */
    where?: PDFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFS to fetch.
     */
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PDFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PDFS
    **/
    _count?: true | PDFCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PDFMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PDFMaxAggregateInputType
  }

  export type GetPDFAggregateType<T extends PDFAggregateArgs> = {
        [P in keyof T & keyof AggregatePDF]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePDF[P]>
      : GetScalarType<T[P], AggregatePDF[P]>
  }




  export type PDFGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PDFWhereInput
    orderBy?: PDFOrderByWithAggregationInput | PDFOrderByWithAggregationInput[]
    by: PDFScalarFieldEnum[] | PDFScalarFieldEnum
    having?: PDFScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PDFCountAggregateInputType | true
    _min?: PDFMinAggregateInputType
    _max?: PDFMaxAggregateInputType
  }

  export type PDFGroupByOutputType = {
    id: string
    name: string
    url: string
    summary: string | null
    type: string | null
    userId: string
    createdAt: Date
    _count: PDFCountAggregateOutputType | null
    _min: PDFMinAggregateOutputType | null
    _max: PDFMaxAggregateOutputType | null
  }

  type GetPDFGroupByPayload<T extends PDFGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PDFGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PDFGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PDFGroupByOutputType[P]>
            : GetScalarType<T[P], PDFGroupByOutputType[P]>
        }
      >
    >


  export type PDFSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    summary?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatMessages?: boolean | PDF$chatMessagesArgs<ExtArgs>
    _count?: boolean | PDFCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pDF"]>

  export type PDFSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    summary?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pDF"]>

  export type PDFSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    summary?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pDF"]>

  export type PDFSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    summary?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PDFOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "summary" | "type" | "userId" | "createdAt", ExtArgs["result"]["pDF"]>
  export type PDFInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatMessages?: boolean | PDF$chatMessagesArgs<ExtArgs>
    _count?: boolean | PDFCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PDFIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PDFIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PDFPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PDF"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      summary: string | null
      type: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["pDF"]>
    composites: {}
  }

  type PDFGetPayload<S extends boolean | null | undefined | PDFDefaultArgs> = $Result.GetResult<Prisma.$PDFPayload, S>

  type PDFCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PDFFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PDFCountAggregateInputType | true
    }

  export interface PDFDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PDF'], meta: { name: 'PDF' } }
    /**
     * Find zero or one PDF that matches the filter.
     * @param {PDFFindUniqueArgs} args - Arguments to find a PDF
     * @example
     * // Get one PDF
     * const pDF = await prisma.pDF.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PDFFindUniqueArgs>(args: SelectSubset<T, PDFFindUniqueArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PDF that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PDFFindUniqueOrThrowArgs} args - Arguments to find a PDF
     * @example
     * // Get one PDF
     * const pDF = await prisma.pDF.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PDFFindUniqueOrThrowArgs>(args: SelectSubset<T, PDFFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PDF that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFFindFirstArgs} args - Arguments to find a PDF
     * @example
     * // Get one PDF
     * const pDF = await prisma.pDF.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PDFFindFirstArgs>(args?: SelectSubset<T, PDFFindFirstArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PDF that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFFindFirstOrThrowArgs} args - Arguments to find a PDF
     * @example
     * // Get one PDF
     * const pDF = await prisma.pDF.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PDFFindFirstOrThrowArgs>(args?: SelectSubset<T, PDFFindFirstOrThrowArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PDFS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PDFS
     * const pDFS = await prisma.pDF.findMany()
     * 
     * // Get first 10 PDFS
     * const pDFS = await prisma.pDF.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pDFWithIdOnly = await prisma.pDF.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PDFFindManyArgs>(args?: SelectSubset<T, PDFFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PDF.
     * @param {PDFCreateArgs} args - Arguments to create a PDF.
     * @example
     * // Create one PDF
     * const PDF = await prisma.pDF.create({
     *   data: {
     *     // ... data to create a PDF
     *   }
     * })
     * 
     */
    create<T extends PDFCreateArgs>(args: SelectSubset<T, PDFCreateArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PDFS.
     * @param {PDFCreateManyArgs} args - Arguments to create many PDFS.
     * @example
     * // Create many PDFS
     * const pDF = await prisma.pDF.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PDFCreateManyArgs>(args?: SelectSubset<T, PDFCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PDFS and returns the data saved in the database.
     * @param {PDFCreateManyAndReturnArgs} args - Arguments to create many PDFS.
     * @example
     * // Create many PDFS
     * const pDF = await prisma.pDF.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PDFS and only return the `id`
     * const pDFWithIdOnly = await prisma.pDF.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PDFCreateManyAndReturnArgs>(args?: SelectSubset<T, PDFCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PDF.
     * @param {PDFDeleteArgs} args - Arguments to delete one PDF.
     * @example
     * // Delete one PDF
     * const PDF = await prisma.pDF.delete({
     *   where: {
     *     // ... filter to delete one PDF
     *   }
     * })
     * 
     */
    delete<T extends PDFDeleteArgs>(args: SelectSubset<T, PDFDeleteArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PDF.
     * @param {PDFUpdateArgs} args - Arguments to update one PDF.
     * @example
     * // Update one PDF
     * const pDF = await prisma.pDF.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PDFUpdateArgs>(args: SelectSubset<T, PDFUpdateArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PDFS.
     * @param {PDFDeleteManyArgs} args - Arguments to filter PDFS to delete.
     * @example
     * // Delete a few PDFS
     * const { count } = await prisma.pDF.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PDFDeleteManyArgs>(args?: SelectSubset<T, PDFDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PDFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PDFS
     * const pDF = await prisma.pDF.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PDFUpdateManyArgs>(args: SelectSubset<T, PDFUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PDFS and returns the data updated in the database.
     * @param {PDFUpdateManyAndReturnArgs} args - Arguments to update many PDFS.
     * @example
     * // Update many PDFS
     * const pDF = await prisma.pDF.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PDFS and only return the `id`
     * const pDFWithIdOnly = await prisma.pDF.updateManyAndReturn({
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
    updateManyAndReturn<T extends PDFUpdateManyAndReturnArgs>(args: SelectSubset<T, PDFUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PDF.
     * @param {PDFUpsertArgs} args - Arguments to update or create a PDF.
     * @example
     * // Update or create a PDF
     * const pDF = await prisma.pDF.upsert({
     *   create: {
     *     // ... data to create a PDF
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PDF we want to update
     *   }
     * })
     */
    upsert<T extends PDFUpsertArgs>(args: SelectSubset<T, PDFUpsertArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PDFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFCountArgs} args - Arguments to filter PDFS to count.
     * @example
     * // Count the number of PDFS
     * const count = await prisma.pDF.count({
     *   where: {
     *     // ... the filter for the PDFS we want to count
     *   }
     * })
    **/
    count<T extends PDFCountArgs>(
      args?: Subset<T, PDFCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PDFCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PDF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PDFAggregateArgs>(args: Subset<T, PDFAggregateArgs>): Prisma.PrismaPromise<GetPDFAggregateType<T>>

    /**
     * Group by PDF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFGroupByArgs} args - Group by arguments.
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
      T extends PDFGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PDFGroupByArgs['orderBy'] }
        : { orderBy?: PDFGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PDFGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPDFGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PDF model
   */
  readonly fields: PDFFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PDF.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PDFClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatMessages<T extends PDF$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, PDF$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PDF model
   */
  interface PDFFieldRefs {
    readonly id: FieldRef<"PDF", 'String'>
    readonly name: FieldRef<"PDF", 'String'>
    readonly url: FieldRef<"PDF", 'String'>
    readonly summary: FieldRef<"PDF", 'String'>
    readonly type: FieldRef<"PDF", 'String'>
    readonly userId: FieldRef<"PDF", 'String'>
    readonly createdAt: FieldRef<"PDF", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PDF findUnique
   */
  export type PDFFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDF to fetch.
     */
    where: PDFWhereUniqueInput
  }

  /**
   * PDF findUniqueOrThrow
   */
  export type PDFFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDF to fetch.
     */
    where: PDFWhereUniqueInput
  }

  /**
   * PDF findFirst
   */
  export type PDFFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDF to fetch.
     */
    where?: PDFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFS to fetch.
     */
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PDFS.
     */
    cursor?: PDFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PDFS.
     */
    distinct?: PDFScalarFieldEnum | PDFScalarFieldEnum[]
  }

  /**
   * PDF findFirstOrThrow
   */
  export type PDFFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDF to fetch.
     */
    where?: PDFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFS to fetch.
     */
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PDFS.
     */
    cursor?: PDFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PDFS.
     */
    distinct?: PDFScalarFieldEnum | PDFScalarFieldEnum[]
  }

  /**
   * PDF findMany
   */
  export type PDFFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDFS to fetch.
     */
    where?: PDFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFS to fetch.
     */
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PDFS.
     */
    cursor?: PDFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFS.
     */
    skip?: number
    distinct?: PDFScalarFieldEnum | PDFScalarFieldEnum[]
  }

  /**
   * PDF create
   */
  export type PDFCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * The data needed to create a PDF.
     */
    data: XOR<PDFCreateInput, PDFUncheckedCreateInput>
  }

  /**
   * PDF createMany
   */
  export type PDFCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PDFS.
     */
    data: PDFCreateManyInput | PDFCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PDF createManyAndReturn
   */
  export type PDFCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * The data used to create many PDFS.
     */
    data: PDFCreateManyInput | PDFCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PDF update
   */
  export type PDFUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * The data needed to update a PDF.
     */
    data: XOR<PDFUpdateInput, PDFUncheckedUpdateInput>
    /**
     * Choose, which PDF to update.
     */
    where: PDFWhereUniqueInput
  }

  /**
   * PDF updateMany
   */
  export type PDFUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PDFS.
     */
    data: XOR<PDFUpdateManyMutationInput, PDFUncheckedUpdateManyInput>
    /**
     * Filter which PDFS to update
     */
    where?: PDFWhereInput
    /**
     * Limit how many PDFS to update.
     */
    limit?: number
  }

  /**
   * PDF updateManyAndReturn
   */
  export type PDFUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * The data used to update PDFS.
     */
    data: XOR<PDFUpdateManyMutationInput, PDFUncheckedUpdateManyInput>
    /**
     * Filter which PDFS to update
     */
    where?: PDFWhereInput
    /**
     * Limit how many PDFS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PDF upsert
   */
  export type PDFUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * The filter to search for the PDF to update in case it exists.
     */
    where: PDFWhereUniqueInput
    /**
     * In case the PDF found by the `where` argument doesn't exist, create a new PDF with this data.
     */
    create: XOR<PDFCreateInput, PDFUncheckedCreateInput>
    /**
     * In case the PDF was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PDFUpdateInput, PDFUncheckedUpdateInput>
  }

  /**
   * PDF delete
   */
  export type PDFDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter which PDF to delete.
     */
    where: PDFWhereUniqueInput
  }

  /**
   * PDF deleteMany
   */
  export type PDFDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PDFS to delete
     */
    where?: PDFWhereInput
    /**
     * Limit how many PDFS to delete.
     */
    limit?: number
  }

  /**
   * PDF.chatMessages
   */
  export type PDF$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * PDF without action
   */
  export type PDFDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    role: string | null
    content: string | null
    pdfId: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    role: string | null
    content: string | null
    pdfId: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    role: number
    content: number
    pdfId: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    role?: true
    content?: true
    pdfId?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    role?: true
    content?: true
    pdfId?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    role?: true
    content?: true
    pdfId?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    role: string
    content: string
    pdfId: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    pdfId?: boolean
    createdAt?: boolean
    pdf?: boolean | PDFDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    pdfId?: boolean
    createdAt?: boolean
    pdf?: boolean | PDFDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    pdfId?: boolean
    createdAt?: boolean
    pdf?: boolean | PDFDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    role?: boolean
    content?: boolean
    pdfId?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "content" | "pdfId" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf?: boolean | PDFDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf?: boolean | PDFDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf?: boolean | PDFDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      pdf: Prisma.$PDFPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      content: string
      pdfId: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pdf<T extends PDFDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PDFDefaultArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly pdfId: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    currency: string | null
    recipient: string | null
    iban: string | null
    swish: string | null
    paid: boolean | null
    pdfUrl: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    currency: string | null
    recipient: string | null
    iban: string | null
    swish: string | null
    paid: boolean | null
    pdfUrl: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    title: number
    amount: number
    currency: number
    recipient: number
    iban: number
    swish: number
    paid: number
    pdfUrl: number
    userId: number
    createdAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    currency?: true
    recipient?: true
    iban?: true
    swish?: true
    paid?: true
    pdfUrl?: true
    userId?: true
    createdAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    currency?: true
    recipient?: true
    iban?: true
    swish?: true
    paid?: true
    pdfUrl?: true
    userId?: true
    createdAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    currency?: true
    recipient?: true
    iban?: true
    swish?: true
    paid?: true
    pdfUrl?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    title: string
    amount: number
    currency: string
    recipient: string
    iban: string | null
    swish: string | null
    paid: boolean
    pdfUrl: string | null
    userId: string
    createdAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    currency?: boolean
    recipient?: boolean
    iban?: boolean
    swish?: boolean
    paid?: boolean
    pdfUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    currency?: boolean
    recipient?: boolean
    iban?: boolean
    swish?: boolean
    paid?: boolean
    pdfUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    currency?: boolean
    recipient?: boolean
    iban?: boolean
    swish?: boolean
    paid?: boolean
    pdfUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    title?: boolean
    amount?: boolean
    currency?: boolean
    recipient?: boolean
    iban?: boolean
    swish?: boolean
    paid?: boolean
    pdfUrl?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "amount" | "currency" | "recipient" | "iban" | "swish" | "paid" | "pdfUrl" | "userId" | "createdAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      amount: number
      currency: string
      recipient: string
      iban: string | null
      swish: string | null
      paid: boolean
      pdfUrl: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly title: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly currency: FieldRef<"Invoice", 'String'>
    readonly recipient: FieldRef<"Invoice", 'String'>
    readonly iban: FieldRef<"Invoice", 'String'>
    readonly swish: FieldRef<"Invoice", 'String'>
    readonly paid: FieldRef<"Invoice", 'Boolean'>
    readonly pdfUrl: FieldRef<"Invoice", 'String'>
    readonly userId: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model AI_Pitch
   */

  export type AggregateAI_Pitch = {
    _count: AI_PitchCountAggregateOutputType | null
    _min: AI_PitchMinAggregateOutputType | null
    _max: AI_PitchMaxAggregateOutputType | null
  }

  export type AI_PitchMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type AI_PitchMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type AI_PitchCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    createdAt: number
    _all: number
  }


  export type AI_PitchMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
  }

  export type AI_PitchMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
  }

  export type AI_PitchCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type AI_PitchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AI_Pitch to aggregate.
     */
    where?: AI_PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AI_Pitches to fetch.
     */
    orderBy?: AI_PitchOrderByWithRelationInput | AI_PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AI_PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AI_Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AI_Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AI_Pitches
    **/
    _count?: true | AI_PitchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AI_PitchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AI_PitchMaxAggregateInputType
  }

  export type GetAI_PitchAggregateType<T extends AI_PitchAggregateArgs> = {
        [P in keyof T & keyof AggregateAI_Pitch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAI_Pitch[P]>
      : GetScalarType<T[P], AggregateAI_Pitch[P]>
  }




  export type AI_PitchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AI_PitchWhereInput
    orderBy?: AI_PitchOrderByWithAggregationInput | AI_PitchOrderByWithAggregationInput[]
    by: AI_PitchScalarFieldEnum[] | AI_PitchScalarFieldEnum
    having?: AI_PitchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AI_PitchCountAggregateInputType | true
    _min?: AI_PitchMinAggregateInputType
    _max?: AI_PitchMaxAggregateInputType
  }

  export type AI_PitchGroupByOutputType = {
    id: string
    userId: string
    content: string
    createdAt: Date
    _count: AI_PitchCountAggregateOutputType | null
    _min: AI_PitchMinAggregateOutputType | null
    _max: AI_PitchMaxAggregateOutputType | null
  }

  type GetAI_PitchGroupByPayload<T extends AI_PitchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AI_PitchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AI_PitchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AI_PitchGroupByOutputType[P]>
            : GetScalarType<T[P], AI_PitchGroupByOutputType[P]>
        }
      >
    >


  export type AI_PitchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aI_Pitch"]>

  export type AI_PitchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aI_Pitch"]>

  export type AI_PitchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aI_Pitch"]>

  export type AI_PitchSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type AI_PitchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "createdAt", ExtArgs["result"]["aI_Pitch"]>
  export type AI_PitchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AI_PitchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AI_PitchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AI_PitchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AI_Pitch"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["aI_Pitch"]>
    composites: {}
  }

  type AI_PitchGetPayload<S extends boolean | null | undefined | AI_PitchDefaultArgs> = $Result.GetResult<Prisma.$AI_PitchPayload, S>

  type AI_PitchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AI_PitchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AI_PitchCountAggregateInputType | true
    }

  export interface AI_PitchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AI_Pitch'], meta: { name: 'AI_Pitch' } }
    /**
     * Find zero or one AI_Pitch that matches the filter.
     * @param {AI_PitchFindUniqueArgs} args - Arguments to find a AI_Pitch
     * @example
     * // Get one AI_Pitch
     * const aI_Pitch = await prisma.aI_Pitch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AI_PitchFindUniqueArgs>(args: SelectSubset<T, AI_PitchFindUniqueArgs<ExtArgs>>): Prisma__AI_PitchClient<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AI_Pitch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AI_PitchFindUniqueOrThrowArgs} args - Arguments to find a AI_Pitch
     * @example
     * // Get one AI_Pitch
     * const aI_Pitch = await prisma.aI_Pitch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AI_PitchFindUniqueOrThrowArgs>(args: SelectSubset<T, AI_PitchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AI_PitchClient<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AI_Pitch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_PitchFindFirstArgs} args - Arguments to find a AI_Pitch
     * @example
     * // Get one AI_Pitch
     * const aI_Pitch = await prisma.aI_Pitch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AI_PitchFindFirstArgs>(args?: SelectSubset<T, AI_PitchFindFirstArgs<ExtArgs>>): Prisma__AI_PitchClient<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AI_Pitch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_PitchFindFirstOrThrowArgs} args - Arguments to find a AI_Pitch
     * @example
     * // Get one AI_Pitch
     * const aI_Pitch = await prisma.aI_Pitch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AI_PitchFindFirstOrThrowArgs>(args?: SelectSubset<T, AI_PitchFindFirstOrThrowArgs<ExtArgs>>): Prisma__AI_PitchClient<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AI_Pitches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_PitchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AI_Pitches
     * const aI_Pitches = await prisma.aI_Pitch.findMany()
     * 
     * // Get first 10 AI_Pitches
     * const aI_Pitches = await prisma.aI_Pitch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aI_PitchWithIdOnly = await prisma.aI_Pitch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AI_PitchFindManyArgs>(args?: SelectSubset<T, AI_PitchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AI_Pitch.
     * @param {AI_PitchCreateArgs} args - Arguments to create a AI_Pitch.
     * @example
     * // Create one AI_Pitch
     * const AI_Pitch = await prisma.aI_Pitch.create({
     *   data: {
     *     // ... data to create a AI_Pitch
     *   }
     * })
     * 
     */
    create<T extends AI_PitchCreateArgs>(args: SelectSubset<T, AI_PitchCreateArgs<ExtArgs>>): Prisma__AI_PitchClient<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AI_Pitches.
     * @param {AI_PitchCreateManyArgs} args - Arguments to create many AI_Pitches.
     * @example
     * // Create many AI_Pitches
     * const aI_Pitch = await prisma.aI_Pitch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AI_PitchCreateManyArgs>(args?: SelectSubset<T, AI_PitchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AI_Pitches and returns the data saved in the database.
     * @param {AI_PitchCreateManyAndReturnArgs} args - Arguments to create many AI_Pitches.
     * @example
     * // Create many AI_Pitches
     * const aI_Pitch = await prisma.aI_Pitch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AI_Pitches and only return the `id`
     * const aI_PitchWithIdOnly = await prisma.aI_Pitch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AI_PitchCreateManyAndReturnArgs>(args?: SelectSubset<T, AI_PitchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AI_Pitch.
     * @param {AI_PitchDeleteArgs} args - Arguments to delete one AI_Pitch.
     * @example
     * // Delete one AI_Pitch
     * const AI_Pitch = await prisma.aI_Pitch.delete({
     *   where: {
     *     // ... filter to delete one AI_Pitch
     *   }
     * })
     * 
     */
    delete<T extends AI_PitchDeleteArgs>(args: SelectSubset<T, AI_PitchDeleteArgs<ExtArgs>>): Prisma__AI_PitchClient<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AI_Pitch.
     * @param {AI_PitchUpdateArgs} args - Arguments to update one AI_Pitch.
     * @example
     * // Update one AI_Pitch
     * const aI_Pitch = await prisma.aI_Pitch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AI_PitchUpdateArgs>(args: SelectSubset<T, AI_PitchUpdateArgs<ExtArgs>>): Prisma__AI_PitchClient<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AI_Pitches.
     * @param {AI_PitchDeleteManyArgs} args - Arguments to filter AI_Pitches to delete.
     * @example
     * // Delete a few AI_Pitches
     * const { count } = await prisma.aI_Pitch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AI_PitchDeleteManyArgs>(args?: SelectSubset<T, AI_PitchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AI_Pitches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_PitchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AI_Pitches
     * const aI_Pitch = await prisma.aI_Pitch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AI_PitchUpdateManyArgs>(args: SelectSubset<T, AI_PitchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AI_Pitches and returns the data updated in the database.
     * @param {AI_PitchUpdateManyAndReturnArgs} args - Arguments to update many AI_Pitches.
     * @example
     * // Update many AI_Pitches
     * const aI_Pitch = await prisma.aI_Pitch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AI_Pitches and only return the `id`
     * const aI_PitchWithIdOnly = await prisma.aI_Pitch.updateManyAndReturn({
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
    updateManyAndReturn<T extends AI_PitchUpdateManyAndReturnArgs>(args: SelectSubset<T, AI_PitchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AI_Pitch.
     * @param {AI_PitchUpsertArgs} args - Arguments to update or create a AI_Pitch.
     * @example
     * // Update or create a AI_Pitch
     * const aI_Pitch = await prisma.aI_Pitch.upsert({
     *   create: {
     *     // ... data to create a AI_Pitch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AI_Pitch we want to update
     *   }
     * })
     */
    upsert<T extends AI_PitchUpsertArgs>(args: SelectSubset<T, AI_PitchUpsertArgs<ExtArgs>>): Prisma__AI_PitchClient<$Result.GetResult<Prisma.$AI_PitchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AI_Pitches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_PitchCountArgs} args - Arguments to filter AI_Pitches to count.
     * @example
     * // Count the number of AI_Pitches
     * const count = await prisma.aI_Pitch.count({
     *   where: {
     *     // ... the filter for the AI_Pitches we want to count
     *   }
     * })
    **/
    count<T extends AI_PitchCountArgs>(
      args?: Subset<T, AI_PitchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AI_PitchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AI_Pitch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_PitchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AI_PitchAggregateArgs>(args: Subset<T, AI_PitchAggregateArgs>): Prisma.PrismaPromise<GetAI_PitchAggregateType<T>>

    /**
     * Group by AI_Pitch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_PitchGroupByArgs} args - Group by arguments.
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
      T extends AI_PitchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AI_PitchGroupByArgs['orderBy'] }
        : { orderBy?: AI_PitchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AI_PitchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAI_PitchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AI_Pitch model
   */
  readonly fields: AI_PitchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AI_Pitch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AI_PitchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AI_Pitch model
   */
  interface AI_PitchFieldRefs {
    readonly id: FieldRef<"AI_Pitch", 'String'>
    readonly userId: FieldRef<"AI_Pitch", 'String'>
    readonly content: FieldRef<"AI_Pitch", 'String'>
    readonly createdAt: FieldRef<"AI_Pitch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AI_Pitch findUnique
   */
  export type AI_PitchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    /**
     * Filter, which AI_Pitch to fetch.
     */
    where: AI_PitchWhereUniqueInput
  }

  /**
   * AI_Pitch findUniqueOrThrow
   */
  export type AI_PitchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    /**
     * Filter, which AI_Pitch to fetch.
     */
    where: AI_PitchWhereUniqueInput
  }

  /**
   * AI_Pitch findFirst
   */
  export type AI_PitchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    /**
     * Filter, which AI_Pitch to fetch.
     */
    where?: AI_PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AI_Pitches to fetch.
     */
    orderBy?: AI_PitchOrderByWithRelationInput | AI_PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AI_Pitches.
     */
    cursor?: AI_PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AI_Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AI_Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AI_Pitches.
     */
    distinct?: AI_PitchScalarFieldEnum | AI_PitchScalarFieldEnum[]
  }

  /**
   * AI_Pitch findFirstOrThrow
   */
  export type AI_PitchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    /**
     * Filter, which AI_Pitch to fetch.
     */
    where?: AI_PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AI_Pitches to fetch.
     */
    orderBy?: AI_PitchOrderByWithRelationInput | AI_PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AI_Pitches.
     */
    cursor?: AI_PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AI_Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AI_Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AI_Pitches.
     */
    distinct?: AI_PitchScalarFieldEnum | AI_PitchScalarFieldEnum[]
  }

  /**
   * AI_Pitch findMany
   */
  export type AI_PitchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    /**
     * Filter, which AI_Pitches to fetch.
     */
    where?: AI_PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AI_Pitches to fetch.
     */
    orderBy?: AI_PitchOrderByWithRelationInput | AI_PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AI_Pitches.
     */
    cursor?: AI_PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AI_Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AI_Pitches.
     */
    skip?: number
    distinct?: AI_PitchScalarFieldEnum | AI_PitchScalarFieldEnum[]
  }

  /**
   * AI_Pitch create
   */
  export type AI_PitchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    /**
     * The data needed to create a AI_Pitch.
     */
    data: XOR<AI_PitchCreateInput, AI_PitchUncheckedCreateInput>
  }

  /**
   * AI_Pitch createMany
   */
  export type AI_PitchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AI_Pitches.
     */
    data: AI_PitchCreateManyInput | AI_PitchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AI_Pitch createManyAndReturn
   */
  export type AI_PitchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * The data used to create many AI_Pitches.
     */
    data: AI_PitchCreateManyInput | AI_PitchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AI_Pitch update
   */
  export type AI_PitchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    /**
     * The data needed to update a AI_Pitch.
     */
    data: XOR<AI_PitchUpdateInput, AI_PitchUncheckedUpdateInput>
    /**
     * Choose, which AI_Pitch to update.
     */
    where: AI_PitchWhereUniqueInput
  }

  /**
   * AI_Pitch updateMany
   */
  export type AI_PitchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AI_Pitches.
     */
    data: XOR<AI_PitchUpdateManyMutationInput, AI_PitchUncheckedUpdateManyInput>
    /**
     * Filter which AI_Pitches to update
     */
    where?: AI_PitchWhereInput
    /**
     * Limit how many AI_Pitches to update.
     */
    limit?: number
  }

  /**
   * AI_Pitch updateManyAndReturn
   */
  export type AI_PitchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * The data used to update AI_Pitches.
     */
    data: XOR<AI_PitchUpdateManyMutationInput, AI_PitchUncheckedUpdateManyInput>
    /**
     * Filter which AI_Pitches to update
     */
    where?: AI_PitchWhereInput
    /**
     * Limit how many AI_Pitches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AI_Pitch upsert
   */
  export type AI_PitchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    /**
     * The filter to search for the AI_Pitch to update in case it exists.
     */
    where: AI_PitchWhereUniqueInput
    /**
     * In case the AI_Pitch found by the `where` argument doesn't exist, create a new AI_Pitch with this data.
     */
    create: XOR<AI_PitchCreateInput, AI_PitchUncheckedCreateInput>
    /**
     * In case the AI_Pitch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AI_PitchUpdateInput, AI_PitchUncheckedUpdateInput>
  }

  /**
   * AI_Pitch delete
   */
  export type AI_PitchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
    /**
     * Filter which AI_Pitch to delete.
     */
    where: AI_PitchWhereUniqueInput
  }

  /**
   * AI_Pitch deleteMany
   */
  export type AI_PitchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AI_Pitches to delete
     */
    where?: AI_PitchWhereInput
    /**
     * Limit how many AI_Pitches to delete.
     */
    limit?: number
  }

  /**
   * AI_Pitch without action
   */
  export type AI_PitchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Pitch
     */
    select?: AI_PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Pitch
     */
    omit?: AI_PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_PitchInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    name: 'name',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    plan: 'plan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    clerkId: 'clerkId',
    companyName: 'companyName',
    companyOrgNr: 'companyOrgNr',
    companyVat: 'companyVat',
    companyAddress: 'companyAddress',
    aiCredits: 'aiCredits',
    pitchUsage: 'pitchUsage'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const PDFScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    summary: 'summary',
    type: 'type',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PDFScalarFieldEnum = (typeof PDFScalarFieldEnum)[keyof typeof PDFScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    role: 'role',
    content: 'content',
    pdfId: 'pdfId',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    amount: 'amount',
    currency: 'currency',
    recipient: 'recipient',
    iban: 'iban',
    swish: 'swish',
    paid: 'paid',
    pdfUrl: 'pdfUrl',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const AI_PitchScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type AI_PitchScalarFieldEnum = (typeof AI_PitchScalarFieldEnum)[keyof typeof AI_PitchScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Plan'
   */
  export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan'>
    


  /**
   * Reference to a field of type 'Plan[]'
   */
  export type ListEnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    plan?: EnumPlanFilter<"User"> | $Enums.Plan
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    clerkId?: StringFilter<"User"> | string
    companyName?: StringNullableFilter<"User"> | string | null
    companyOrgNr?: StringNullableFilter<"User"> | string | null
    companyVat?: StringNullableFilter<"User"> | string | null
    companyAddress?: StringNullableFilter<"User"> | string | null
    aiCredits?: IntFilter<"User"> | number
    pitchUsage?: IntFilter<"User"> | number
    links?: LinkListRelationFilter
    pdfs?: PDFListRelationFilter
    invoices?: InvoiceListRelationFilter
    aiPitches?: AI_PitchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    clerkId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    companyOrgNr?: SortOrderInput | SortOrder
    companyVat?: SortOrderInput | SortOrder
    companyAddress?: SortOrderInput | SortOrder
    aiCredits?: SortOrder
    pitchUsage?: SortOrder
    links?: LinkOrderByRelationAggregateInput
    pdfs?: PDFOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    aiPitches?: AI_PitchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    plan?: EnumPlanFilter<"User"> | $Enums.Plan
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    companyName?: StringNullableFilter<"User"> | string | null
    companyOrgNr?: StringNullableFilter<"User"> | string | null
    companyVat?: StringNullableFilter<"User"> | string | null
    companyAddress?: StringNullableFilter<"User"> | string | null
    aiCredits?: IntFilter<"User"> | number
    pitchUsage?: IntFilter<"User"> | number
    links?: LinkListRelationFilter
    pdfs?: PDFListRelationFilter
    invoices?: InvoiceListRelationFilter
    aiPitches?: AI_PitchListRelationFilter
  }, "id" | "username" | "email" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    clerkId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    companyOrgNr?: SortOrderInput | SortOrder
    companyVat?: SortOrderInput | SortOrder
    companyAddress?: SortOrderInput | SortOrder
    aiCredits?: SortOrder
    pitchUsage?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    plan?: EnumPlanWithAggregatesFilter<"User"> | $Enums.Plan
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    clerkId?: StringWithAggregatesFilter<"User"> | string
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyOrgNr?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyVat?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    aiCredits?: IntWithAggregatesFilter<"User"> | number
    pitchUsage?: IntWithAggregatesFilter<"User"> | number
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: StringFilter<"Link"> | string
    title?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    userId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    title?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    userId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Link"> | string
    title?: StringWithAggregatesFilter<"Link"> | string
    url?: StringWithAggregatesFilter<"Link"> | string
    userId?: StringWithAggregatesFilter<"Link"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
  }

  export type PDFWhereInput = {
    AND?: PDFWhereInput | PDFWhereInput[]
    OR?: PDFWhereInput[]
    NOT?: PDFWhereInput | PDFWhereInput[]
    id?: StringFilter<"PDF"> | string
    name?: StringFilter<"PDF"> | string
    url?: StringFilter<"PDF"> | string
    summary?: StringNullableFilter<"PDF"> | string | null
    type?: StringNullableFilter<"PDF"> | string | null
    userId?: StringFilter<"PDF"> | string
    createdAt?: DateTimeFilter<"PDF"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatMessages?: ChatMessageListRelationFilter
  }

  export type PDFOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    summary?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
  }

  export type PDFWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PDFWhereInput | PDFWhereInput[]
    OR?: PDFWhereInput[]
    NOT?: PDFWhereInput | PDFWhereInput[]
    name?: StringFilter<"PDF"> | string
    url?: StringFilter<"PDF"> | string
    summary?: StringNullableFilter<"PDF"> | string | null
    type?: StringNullableFilter<"PDF"> | string | null
    userId?: StringFilter<"PDF"> | string
    createdAt?: DateTimeFilter<"PDF"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatMessages?: ChatMessageListRelationFilter
  }, "id">

  export type PDFOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    summary?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PDFCountOrderByAggregateInput
    _max?: PDFMaxOrderByAggregateInput
    _min?: PDFMinOrderByAggregateInput
  }

  export type PDFScalarWhereWithAggregatesInput = {
    AND?: PDFScalarWhereWithAggregatesInput | PDFScalarWhereWithAggregatesInput[]
    OR?: PDFScalarWhereWithAggregatesInput[]
    NOT?: PDFScalarWhereWithAggregatesInput | PDFScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PDF"> | string
    name?: StringWithAggregatesFilter<"PDF"> | string
    url?: StringWithAggregatesFilter<"PDF"> | string
    summary?: StringNullableWithAggregatesFilter<"PDF"> | string | null
    type?: StringNullableWithAggregatesFilter<"PDF"> | string | null
    userId?: StringWithAggregatesFilter<"PDF"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PDF"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    pdfId?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    pdf?: XOR<PDFScalarRelationFilter, PDFWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    pdfId?: SortOrder
    createdAt?: SortOrder
    pdf?: PDFOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    pdfId?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    pdf?: XOR<PDFScalarRelationFilter, PDFWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    pdfId?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    pdfId?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    title?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    recipient?: StringFilter<"Invoice"> | string
    iban?: StringNullableFilter<"Invoice"> | string | null
    swish?: StringNullableFilter<"Invoice"> | string | null
    paid?: BoolFilter<"Invoice"> | boolean
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    userId?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    recipient?: SortOrder
    iban?: SortOrderInput | SortOrder
    swish?: SortOrderInput | SortOrder
    paid?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    title?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    recipient?: StringFilter<"Invoice"> | string
    iban?: StringNullableFilter<"Invoice"> | string | null
    swish?: StringNullableFilter<"Invoice"> | string | null
    paid?: BoolFilter<"Invoice"> | boolean
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    userId?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    recipient?: SortOrder
    iban?: SortOrderInput | SortOrder
    swish?: SortOrderInput | SortOrder
    paid?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    title?: StringWithAggregatesFilter<"Invoice"> | string
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    currency?: StringWithAggregatesFilter<"Invoice"> | string
    recipient?: StringWithAggregatesFilter<"Invoice"> | string
    iban?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    swish?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    paid?: BoolWithAggregatesFilter<"Invoice"> | boolean
    pdfUrl?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    userId?: StringWithAggregatesFilter<"Invoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type AI_PitchWhereInput = {
    AND?: AI_PitchWhereInput | AI_PitchWhereInput[]
    OR?: AI_PitchWhereInput[]
    NOT?: AI_PitchWhereInput | AI_PitchWhereInput[]
    id?: StringFilter<"AI_Pitch"> | string
    userId?: StringFilter<"AI_Pitch"> | string
    content?: StringFilter<"AI_Pitch"> | string
    createdAt?: DateTimeFilter<"AI_Pitch"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AI_PitchOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AI_PitchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AI_PitchWhereInput | AI_PitchWhereInput[]
    OR?: AI_PitchWhereInput[]
    NOT?: AI_PitchWhereInput | AI_PitchWhereInput[]
    userId?: StringFilter<"AI_Pitch"> | string
    content?: StringFilter<"AI_Pitch"> | string
    createdAt?: DateTimeFilter<"AI_Pitch"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AI_PitchOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: AI_PitchCountOrderByAggregateInput
    _max?: AI_PitchMaxOrderByAggregateInput
    _min?: AI_PitchMinOrderByAggregateInput
  }

  export type AI_PitchScalarWhereWithAggregatesInput = {
    AND?: AI_PitchScalarWhereWithAggregatesInput | AI_PitchScalarWhereWithAggregatesInput[]
    OR?: AI_PitchScalarWhereWithAggregatesInput[]
    NOT?: AI_PitchScalarWhereWithAggregatesInput | AI_PitchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AI_Pitch"> | string
    userId?: StringWithAggregatesFilter<"AI_Pitch"> | string
    content?: StringWithAggregatesFilter<"AI_Pitch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AI_Pitch"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    links?: LinkCreateNestedManyWithoutUserInput
    pdfs?: PDFCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    aiPitches?: AI_PitchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    pdfs?: PDFUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    aiPitches?: AI_PitchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    links?: LinkUpdateManyWithoutUserNestedInput
    pdfs?: PDFUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    aiPitches?: AI_PitchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    links?: LinkUncheckedUpdateManyWithoutUserNestedInput
    pdfs?: PDFUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    aiPitches?: AI_PitchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
  }

  export type LinkCreateInput = {
    id?: string
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLinksInput
  }

  export type LinkUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLinksNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateManyInput = {
    id?: string
    title: string
    url: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PDFCreateInput = {
    id?: string
    name: string
    url: string
    summary?: string | null
    type?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPdfsInput
    chatMessages?: ChatMessageCreateNestedManyWithoutPdfInput
  }

  export type PDFUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    summary?: string | null
    type?: string | null
    userId: string
    createdAt?: Date | string
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutPdfInput
  }

  export type PDFUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPdfsNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutPdfNestedInput
  }

  export type PDFUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutPdfNestedInput
  }

  export type PDFCreateManyInput = {
    id?: string
    name: string
    url: string
    summary?: string | null
    type?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type PDFUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PDFUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    pdf: PDFCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    role: string
    content: string
    pdfId: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf?: PDFUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdfId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    role: string
    content: string
    pdfId: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pdfId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    title: string
    amount: number
    currency?: string
    recipient: string
    iban?: string | null
    swish?: string | null
    paid?: boolean
    pdfUrl?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    title: string
    amount: number
    currency?: string
    recipient: string
    iban?: string | null
    swish?: string | null
    paid?: boolean
    pdfUrl?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    swish?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    swish?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    title: string
    amount: number
    currency?: string
    recipient: string
    iban?: string | null
    swish?: string | null
    paid?: boolean
    pdfUrl?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    swish?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    swish?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_PitchCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiPitchesInput
  }

  export type AI_PitchUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
  }

  export type AI_PitchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiPitchesNestedInput
  }

  export type AI_PitchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_PitchCreateManyInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
  }

  export type AI_PitchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_PitchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type EnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type PDFListRelationFilter = {
    every?: PDFWhereInput
    some?: PDFWhereInput
    none?: PDFWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type AI_PitchListRelationFilter = {
    every?: AI_PitchWhereInput
    some?: AI_PitchWhereInput
    none?: AI_PitchWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PDFOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AI_PitchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    clerkId?: SortOrder
    companyName?: SortOrder
    companyOrgNr?: SortOrder
    companyVat?: SortOrder
    companyAddress?: SortOrder
    aiCredits?: SortOrder
    pitchUsage?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    aiCredits?: SortOrder
    pitchUsage?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    clerkId?: SortOrder
    companyName?: SortOrder
    companyOrgNr?: SortOrder
    companyVat?: SortOrder
    companyAddress?: SortOrder
    aiCredits?: SortOrder
    pitchUsage?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    clerkId?: SortOrder
    companyName?: SortOrder
    companyOrgNr?: SortOrder
    companyVat?: SortOrder
    companyAddress?: SortOrder
    aiCredits?: SortOrder
    pitchUsage?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    aiCredits?: SortOrder
    pitchUsage?: SortOrder
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
  }

  export type EnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PDFCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PDFMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PDFMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PDFScalarRelationFilter = {
    is?: PDFWhereInput
    isNot?: PDFWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    pdfId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    pdfId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    pdfId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    recipient?: SortOrder
    iban?: SortOrder
    swish?: SortOrder
    paid?: SortOrder
    pdfUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    recipient?: SortOrder
    iban?: SortOrder
    swish?: SortOrder
    paid?: SortOrder
    pdfUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    recipient?: SortOrder
    iban?: SortOrder
    swish?: SortOrder
    paid?: SortOrder
    pdfUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AI_PitchCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type AI_PitchMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type AI_PitchMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput> | LinkCreateWithoutUserInput[] | LinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutUserInput | LinkCreateOrConnectWithoutUserInput[]
    createMany?: LinkCreateManyUserInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type PDFCreateNestedManyWithoutUserInput = {
    create?: XOR<PDFCreateWithoutUserInput, PDFUncheckedCreateWithoutUserInput> | PDFCreateWithoutUserInput[] | PDFUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PDFCreateOrConnectWithoutUserInput | PDFCreateOrConnectWithoutUserInput[]
    createMany?: PDFCreateManyUserInputEnvelope
    connect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type AI_PitchCreateNestedManyWithoutUserInput = {
    create?: XOR<AI_PitchCreateWithoutUserInput, AI_PitchUncheckedCreateWithoutUserInput> | AI_PitchCreateWithoutUserInput[] | AI_PitchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AI_PitchCreateOrConnectWithoutUserInput | AI_PitchCreateOrConnectWithoutUserInput[]
    createMany?: AI_PitchCreateManyUserInputEnvelope
    connect?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput> | LinkCreateWithoutUserInput[] | LinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutUserInput | LinkCreateOrConnectWithoutUserInput[]
    createMany?: LinkCreateManyUserInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type PDFUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PDFCreateWithoutUserInput, PDFUncheckedCreateWithoutUserInput> | PDFCreateWithoutUserInput[] | PDFUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PDFCreateOrConnectWithoutUserInput | PDFCreateOrConnectWithoutUserInput[]
    createMany?: PDFCreateManyUserInputEnvelope
    connect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type AI_PitchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AI_PitchCreateWithoutUserInput, AI_PitchUncheckedCreateWithoutUserInput> | AI_PitchCreateWithoutUserInput[] | AI_PitchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AI_PitchCreateOrConnectWithoutUserInput | AI_PitchCreateOrConnectWithoutUserInput[]
    createMany?: AI_PitchCreateManyUserInputEnvelope
    connect?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPlanFieldUpdateOperationsInput = {
    set?: $Enums.Plan
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput> | LinkCreateWithoutUserInput[] | LinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutUserInput | LinkCreateOrConnectWithoutUserInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutUserInput | LinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkCreateManyUserInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutUserInput | LinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutUserInput | LinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type PDFUpdateManyWithoutUserNestedInput = {
    create?: XOR<PDFCreateWithoutUserInput, PDFUncheckedCreateWithoutUserInput> | PDFCreateWithoutUserInput[] | PDFUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PDFCreateOrConnectWithoutUserInput | PDFCreateOrConnectWithoutUserInput[]
    upsert?: PDFUpsertWithWhereUniqueWithoutUserInput | PDFUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PDFCreateManyUserInputEnvelope
    set?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    disconnect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    delete?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    connect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    update?: PDFUpdateWithWhereUniqueWithoutUserInput | PDFUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PDFUpdateManyWithWhereWithoutUserInput | PDFUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PDFScalarWhereInput | PDFScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type AI_PitchUpdateManyWithoutUserNestedInput = {
    create?: XOR<AI_PitchCreateWithoutUserInput, AI_PitchUncheckedCreateWithoutUserInput> | AI_PitchCreateWithoutUserInput[] | AI_PitchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AI_PitchCreateOrConnectWithoutUserInput | AI_PitchCreateOrConnectWithoutUserInput[]
    upsert?: AI_PitchUpsertWithWhereUniqueWithoutUserInput | AI_PitchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AI_PitchCreateManyUserInputEnvelope
    set?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
    disconnect?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
    delete?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
    connect?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
    update?: AI_PitchUpdateWithWhereUniqueWithoutUserInput | AI_PitchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AI_PitchUpdateManyWithWhereWithoutUserInput | AI_PitchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AI_PitchScalarWhereInput | AI_PitchScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput> | LinkCreateWithoutUserInput[] | LinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutUserInput | LinkCreateOrConnectWithoutUserInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutUserInput | LinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkCreateManyUserInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutUserInput | LinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutUserInput | LinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type PDFUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PDFCreateWithoutUserInput, PDFUncheckedCreateWithoutUserInput> | PDFCreateWithoutUserInput[] | PDFUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PDFCreateOrConnectWithoutUserInput | PDFCreateOrConnectWithoutUserInput[]
    upsert?: PDFUpsertWithWhereUniqueWithoutUserInput | PDFUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PDFCreateManyUserInputEnvelope
    set?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    disconnect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    delete?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    connect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    update?: PDFUpdateWithWhereUniqueWithoutUserInput | PDFUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PDFUpdateManyWithWhereWithoutUserInput | PDFUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PDFScalarWhereInput | PDFScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type AI_PitchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AI_PitchCreateWithoutUserInput, AI_PitchUncheckedCreateWithoutUserInput> | AI_PitchCreateWithoutUserInput[] | AI_PitchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AI_PitchCreateOrConnectWithoutUserInput | AI_PitchCreateOrConnectWithoutUserInput[]
    upsert?: AI_PitchUpsertWithWhereUniqueWithoutUserInput | AI_PitchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AI_PitchCreateManyUserInputEnvelope
    set?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
    disconnect?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
    delete?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
    connect?: AI_PitchWhereUniqueInput | AI_PitchWhereUniqueInput[]
    update?: AI_PitchUpdateWithWhereUniqueWithoutUserInput | AI_PitchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AI_PitchUpdateManyWithWhereWithoutUserInput | AI_PitchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AI_PitchScalarWhereInput | AI_PitchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLinksInput = {
    create?: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    upsert?: UserUpsertWithoutLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinksInput, UserUpdateWithoutLinksInput>, UserUncheckedUpdateWithoutLinksInput>
  }

  export type UserCreateNestedOneWithoutPdfsInput = {
    create?: XOR<UserCreateWithoutPdfsInput, UserUncheckedCreateWithoutPdfsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPdfsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutPdfInput = {
    create?: XOR<ChatMessageCreateWithoutPdfInput, ChatMessageUncheckedCreateWithoutPdfInput> | ChatMessageCreateWithoutPdfInput[] | ChatMessageUncheckedCreateWithoutPdfInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutPdfInput | ChatMessageCreateOrConnectWithoutPdfInput[]
    createMany?: ChatMessageCreateManyPdfInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutPdfInput = {
    create?: XOR<ChatMessageCreateWithoutPdfInput, ChatMessageUncheckedCreateWithoutPdfInput> | ChatMessageCreateWithoutPdfInput[] | ChatMessageUncheckedCreateWithoutPdfInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutPdfInput | ChatMessageCreateOrConnectWithoutPdfInput[]
    createMany?: ChatMessageCreateManyPdfInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPdfsNestedInput = {
    create?: XOR<UserCreateWithoutPdfsInput, UserUncheckedCreateWithoutPdfsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPdfsInput
    upsert?: UserUpsertWithoutPdfsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPdfsInput, UserUpdateWithoutPdfsInput>, UserUncheckedUpdateWithoutPdfsInput>
  }

  export type ChatMessageUpdateManyWithoutPdfNestedInput = {
    create?: XOR<ChatMessageCreateWithoutPdfInput, ChatMessageUncheckedCreateWithoutPdfInput> | ChatMessageCreateWithoutPdfInput[] | ChatMessageUncheckedCreateWithoutPdfInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutPdfInput | ChatMessageCreateOrConnectWithoutPdfInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutPdfInput | ChatMessageUpsertWithWhereUniqueWithoutPdfInput[]
    createMany?: ChatMessageCreateManyPdfInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutPdfInput | ChatMessageUpdateWithWhereUniqueWithoutPdfInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutPdfInput | ChatMessageUpdateManyWithWhereWithoutPdfInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutPdfNestedInput = {
    create?: XOR<ChatMessageCreateWithoutPdfInput, ChatMessageUncheckedCreateWithoutPdfInput> | ChatMessageCreateWithoutPdfInput[] | ChatMessageUncheckedCreateWithoutPdfInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutPdfInput | ChatMessageCreateOrConnectWithoutPdfInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutPdfInput | ChatMessageUpsertWithWhereUniqueWithoutPdfInput[]
    createMany?: ChatMessageCreateManyPdfInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutPdfInput | ChatMessageUpdateWithWhereUniqueWithoutPdfInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutPdfInput | ChatMessageUpdateManyWithWhereWithoutPdfInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type PDFCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<PDFCreateWithoutChatMessagesInput, PDFUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: PDFCreateOrConnectWithoutChatMessagesInput
    connect?: PDFWhereUniqueInput
  }

  export type PDFUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<PDFCreateWithoutChatMessagesInput, PDFUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: PDFCreateOrConnectWithoutChatMessagesInput
    upsert?: PDFUpsertWithoutChatMessagesInput
    connect?: PDFWhereUniqueInput
    update?: XOR<XOR<PDFUpdateToOneWithWhereWithoutChatMessagesInput, PDFUpdateWithoutChatMessagesInput>, PDFUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserCreateNestedOneWithoutAiPitchesInput = {
    create?: XOR<UserCreateWithoutAiPitchesInput, UserUncheckedCreateWithoutAiPitchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiPitchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAiPitchesNestedInput = {
    create?: XOR<UserCreateWithoutAiPitchesInput, UserUncheckedCreateWithoutAiPitchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiPitchesInput
    upsert?: UserUpsertWithoutAiPitchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiPitchesInput, UserUpdateWithoutAiPitchesInput>, UserUncheckedUpdateWithoutAiPitchesInput>
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
  }

  export type NestedEnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
  }

  export type NestedEnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LinkCreateWithoutUserInput = {
    id?: string
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkCreateOrConnectWithoutUserInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput>
  }

  export type LinkCreateManyUserInputEnvelope = {
    data: LinkCreateManyUserInput | LinkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PDFCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    summary?: string | null
    type?: string | null
    createdAt?: Date | string
    chatMessages?: ChatMessageCreateNestedManyWithoutPdfInput
  }

  export type PDFUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    summary?: string | null
    type?: string | null
    createdAt?: Date | string
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutPdfInput
  }

  export type PDFCreateOrConnectWithoutUserInput = {
    where: PDFWhereUniqueInput
    create: XOR<PDFCreateWithoutUserInput, PDFUncheckedCreateWithoutUserInput>
  }

  export type PDFCreateManyUserInputEnvelope = {
    data: PDFCreateManyUserInput | PDFCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutUserInput = {
    id?: string
    title: string
    amount: number
    currency?: string
    recipient: string
    iban?: string | null
    swish?: string | null
    paid?: boolean
    pdfUrl?: string | null
    createdAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    amount: number
    currency?: string
    recipient: string
    iban?: string | null
    swish?: string | null
    paid?: boolean
    pdfUrl?: string | null
    createdAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceCreateManyUserInputEnvelope = {
    data: InvoiceCreateManyUserInput | InvoiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AI_PitchCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type AI_PitchUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type AI_PitchCreateOrConnectWithoutUserInput = {
    where: AI_PitchWhereUniqueInput
    create: XOR<AI_PitchCreateWithoutUserInput, AI_PitchUncheckedCreateWithoutUserInput>
  }

  export type AI_PitchCreateManyUserInputEnvelope = {
    data: AI_PitchCreateManyUserInput | AI_PitchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LinkUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutUserInput, LinkUncheckedUpdateWithoutUserInput>
    create: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutUserInput, LinkUncheckedUpdateWithoutUserInput>
  }

  export type LinkUpdateManyWithWhereWithoutUserInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutUserInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: StringFilter<"Link"> | string
    title?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    userId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
  }

  export type PDFUpsertWithWhereUniqueWithoutUserInput = {
    where: PDFWhereUniqueInput
    update: XOR<PDFUpdateWithoutUserInput, PDFUncheckedUpdateWithoutUserInput>
    create: XOR<PDFCreateWithoutUserInput, PDFUncheckedCreateWithoutUserInput>
  }

  export type PDFUpdateWithWhereUniqueWithoutUserInput = {
    where: PDFWhereUniqueInput
    data: XOR<PDFUpdateWithoutUserInput, PDFUncheckedUpdateWithoutUserInput>
  }

  export type PDFUpdateManyWithWhereWithoutUserInput = {
    where: PDFScalarWhereInput
    data: XOR<PDFUpdateManyMutationInput, PDFUncheckedUpdateManyWithoutUserInput>
  }

  export type PDFScalarWhereInput = {
    AND?: PDFScalarWhereInput | PDFScalarWhereInput[]
    OR?: PDFScalarWhereInput[]
    NOT?: PDFScalarWhereInput | PDFScalarWhereInput[]
    id?: StringFilter<"PDF"> | string
    name?: StringFilter<"PDF"> | string
    url?: StringFilter<"PDF"> | string
    summary?: StringNullableFilter<"PDF"> | string | null
    type?: StringNullableFilter<"PDF"> | string | null
    userId?: StringFilter<"PDF"> | string
    createdAt?: DateTimeFilter<"PDF"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutUserInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    title?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    recipient?: StringFilter<"Invoice"> | string
    iban?: StringNullableFilter<"Invoice"> | string | null
    swish?: StringNullableFilter<"Invoice"> | string | null
    paid?: BoolFilter<"Invoice"> | boolean
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    userId?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type AI_PitchUpsertWithWhereUniqueWithoutUserInput = {
    where: AI_PitchWhereUniqueInput
    update: XOR<AI_PitchUpdateWithoutUserInput, AI_PitchUncheckedUpdateWithoutUserInput>
    create: XOR<AI_PitchCreateWithoutUserInput, AI_PitchUncheckedCreateWithoutUserInput>
  }

  export type AI_PitchUpdateWithWhereUniqueWithoutUserInput = {
    where: AI_PitchWhereUniqueInput
    data: XOR<AI_PitchUpdateWithoutUserInput, AI_PitchUncheckedUpdateWithoutUserInput>
  }

  export type AI_PitchUpdateManyWithWhereWithoutUserInput = {
    where: AI_PitchScalarWhereInput
    data: XOR<AI_PitchUpdateManyMutationInput, AI_PitchUncheckedUpdateManyWithoutUserInput>
  }

  export type AI_PitchScalarWhereInput = {
    AND?: AI_PitchScalarWhereInput | AI_PitchScalarWhereInput[]
    OR?: AI_PitchScalarWhereInput[]
    NOT?: AI_PitchScalarWhereInput | AI_PitchScalarWhereInput[]
    id?: StringFilter<"AI_Pitch"> | string
    userId?: StringFilter<"AI_Pitch"> | string
    content?: StringFilter<"AI_Pitch"> | string
    createdAt?: DateTimeFilter<"AI_Pitch"> | Date | string
  }

  export type UserCreateWithoutLinksInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    pdfs?: PDFCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    aiPitches?: AI_PitchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinksInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    pdfs?: PDFUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    aiPitches?: AI_PitchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
  }

  export type UserUpsertWithoutLinksInput = {
    update: XOR<UserUpdateWithoutLinksInput, UserUncheckedUpdateWithoutLinksInput>
    create: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinksInput, UserUncheckedUpdateWithoutLinksInput>
  }

  export type UserUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    pdfs?: PDFUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    aiPitches?: AI_PitchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    pdfs?: PDFUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    aiPitches?: AI_PitchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPdfsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    links?: LinkCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    aiPitches?: AI_PitchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPdfsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    aiPitches?: AI_PitchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPdfsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPdfsInput, UserUncheckedCreateWithoutPdfsInput>
  }

  export type ChatMessageCreateWithoutPdfInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutPdfInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutPdfInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutPdfInput, ChatMessageUncheckedCreateWithoutPdfInput>
  }

  export type ChatMessageCreateManyPdfInputEnvelope = {
    data: ChatMessageCreateManyPdfInput | ChatMessageCreateManyPdfInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPdfsInput = {
    update: XOR<UserUpdateWithoutPdfsInput, UserUncheckedUpdateWithoutPdfsInput>
    create: XOR<UserCreateWithoutPdfsInput, UserUncheckedCreateWithoutPdfsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPdfsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPdfsInput, UserUncheckedUpdateWithoutPdfsInput>
  }

  export type UserUpdateWithoutPdfsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    links?: LinkUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
    aiPitches?: AI_PitchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPdfsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    links?: LinkUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
    aiPitches?: AI_PitchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutPdfInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutPdfInput, ChatMessageUncheckedUpdateWithoutPdfInput>
    create: XOR<ChatMessageCreateWithoutPdfInput, ChatMessageUncheckedCreateWithoutPdfInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutPdfInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutPdfInput, ChatMessageUncheckedUpdateWithoutPdfInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutPdfInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutPdfInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    pdfId?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type PDFCreateWithoutChatMessagesInput = {
    id?: string
    name: string
    url: string
    summary?: string | null
    type?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPdfsInput
  }

  export type PDFUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    name: string
    url: string
    summary?: string | null
    type?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type PDFCreateOrConnectWithoutChatMessagesInput = {
    where: PDFWhereUniqueInput
    create: XOR<PDFCreateWithoutChatMessagesInput, PDFUncheckedCreateWithoutChatMessagesInput>
  }

  export type PDFUpsertWithoutChatMessagesInput = {
    update: XOR<PDFUpdateWithoutChatMessagesInput, PDFUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<PDFCreateWithoutChatMessagesInput, PDFUncheckedCreateWithoutChatMessagesInput>
    where?: PDFWhereInput
  }

  export type PDFUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: PDFWhereInput
    data: XOR<PDFUpdateWithoutChatMessagesInput, PDFUncheckedUpdateWithoutChatMessagesInput>
  }

  export type PDFUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPdfsNestedInput
  }

  export type PDFUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutInvoicesInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    links?: LinkCreateNestedManyWithoutUserInput
    pdfs?: PDFCreateNestedManyWithoutUserInput
    aiPitches?: AI_PitchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    pdfs?: PDFUncheckedCreateNestedManyWithoutUserInput
    aiPitches?: AI_PitchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    links?: LinkUpdateManyWithoutUserNestedInput
    pdfs?: PDFUpdateManyWithoutUserNestedInput
    aiPitches?: AI_PitchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    links?: LinkUncheckedUpdateManyWithoutUserNestedInput
    pdfs?: PDFUncheckedUpdateManyWithoutUserNestedInput
    aiPitches?: AI_PitchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAiPitchesInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    links?: LinkCreateNestedManyWithoutUserInput
    pdfs?: PDFCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiPitchesInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    plan?: $Enums.Plan
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    clerkId: string
    companyName?: string | null
    companyOrgNr?: string | null
    companyVat?: string | null
    companyAddress?: string | null
    aiCredits?: number
    pitchUsage?: number
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    pdfs?: PDFUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiPitchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiPitchesInput, UserUncheckedCreateWithoutAiPitchesInput>
  }

  export type UserUpsertWithoutAiPitchesInput = {
    update: XOR<UserUpdateWithoutAiPitchesInput, UserUncheckedUpdateWithoutAiPitchesInput>
    create: XOR<UserCreateWithoutAiPitchesInput, UserUncheckedCreateWithoutAiPitchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiPitchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiPitchesInput, UserUncheckedUpdateWithoutAiPitchesInput>
  }

  export type UserUpdateWithoutAiPitchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    links?: LinkUpdateManyWithoutUserNestedInput
    pdfs?: PDFUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiPitchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clerkId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyOrgNr?: NullableStringFieldUpdateOperationsInput | string | null
    companyVat?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    aiCredits?: IntFieldUpdateOperationsInput | number
    pitchUsage?: IntFieldUpdateOperationsInput | number
    links?: LinkUncheckedUpdateManyWithoutUserNestedInput
    pdfs?: PDFUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LinkCreateManyUserInput = {
    id?: string
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PDFCreateManyUserInput = {
    id?: string
    name: string
    url: string
    summary?: string | null
    type?: string | null
    createdAt?: Date | string
  }

  export type InvoiceCreateManyUserInput = {
    id?: string
    title: string
    amount: number
    currency?: string
    recipient: string
    iban?: string | null
    swish?: string | null
    paid?: boolean
    pdfUrl?: string | null
    createdAt?: Date | string
  }

  export type AI_PitchCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type LinkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PDFUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessageUpdateManyWithoutPdfNestedInput
  }

  export type PDFUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutPdfNestedInput
  }

  export type PDFUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    swish?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    swish?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    swish?: NullableStringFieldUpdateOperationsInput | string | null
    paid?: BoolFieldUpdateOperationsInput | boolean
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_PitchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_PitchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_PitchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyPdfInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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