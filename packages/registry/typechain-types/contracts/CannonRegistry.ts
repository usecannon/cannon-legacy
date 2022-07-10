/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface CannonRegistryInterface extends utils.Interface {
  functions: {
    "MIN_PACKAGE_NAME_LENGTH()": FunctionFragment;
    "acceptOwnership()": FunctionFragment;
    "acceptPackageOwnership(bytes32)": FunctionFragment;
    "getImplementation()": FunctionFragment;
    "getPackageNominatedOwner(bytes32)": FunctionFragment;
    "getPackageUrl(bytes32,bytes32)": FunctionFragment;
    "getPackageVersions(bytes32)": FunctionFragment;
    "nominateNewOwner(address)": FunctionFragment;
    "nominatePackageOwner(bytes32,address)": FunctionFragment;
    "nominatedOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "publish(bytes32,bytes32,bytes32[],string)": FunctionFragment;
    "renounceNomination()": FunctionFragment;
    "simulateUpgradeTo(address)": FunctionFragment;
    "unverifyPackage(bytes32)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "validatePackageName(bytes32)": FunctionFragment;
    "verifyPackage(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MIN_PACKAGE_NAME_LENGTH"
      | "acceptOwnership"
      | "acceptPackageOwnership"
      | "getImplementation"
      | "getPackageNominatedOwner"
      | "getPackageUrl"
      | "getPackageVersions"
      | "nominateNewOwner"
      | "nominatePackageOwner"
      | "nominatedOwner"
      | "owner"
      | "publish"
      | "renounceNomination"
      | "simulateUpgradeTo"
      | "unverifyPackage"
      | "upgradeTo"
      | "validatePackageName"
      | "verifyPackage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MIN_PACKAGE_NAME_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptPackageOwnership",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPackageNominatedOwner",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPackageUrl",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPackageVersions",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "nominateNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "nominatePackageOwner",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "nominatedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "publish",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceNomination",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "simulateUpgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unverifyPackage",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validatePackageName",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyPackage",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "MIN_PACKAGE_NAME_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptPackageOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPackageNominatedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPackageUrl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPackageVersions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominateNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominatePackageOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominatedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "publish", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceNomination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simulateUpgradeTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unverifyPackage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validatePackageName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyPackage",
    data: BytesLike
  ): Result;

  events: {
    "OwnerChanged(address,address)": EventFragment;
    "OwnerNominated(address)": EventFragment;
    "PackagePublish(bytes32,bytes32,bytes32[],string,address)": EventFragment;
    "PackageUnverify(bytes32,address)": EventFragment;
    "PackageVerify(bytes32,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PackagePublish"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PackageUnverify"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PackageVerify"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<
  [string, string],
  OwnerChangedEventObject
>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<
  [string],
  OwnerNominatedEventObject
>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface PackagePublishEventObject {
  name: string;
  version: string;
  tags: string[];
  url: string;
  owner: string;
}
export type PackagePublishEvent = TypedEvent<
  [string, string, string[], string, string],
  PackagePublishEventObject
>;

export type PackagePublishEventFilter = TypedEventFilter<PackagePublishEvent>;

export interface PackageUnverifyEventObject {
  name: string;
  verifier: string;
}
export type PackageUnverifyEvent = TypedEvent<
  [string, string],
  PackageUnverifyEventObject
>;

export type PackageUnverifyEventFilter = TypedEventFilter<PackageUnverifyEvent>;

export interface PackageVerifyEventObject {
  name: string;
  verifier: string;
}
export type PackageVerifyEvent = TypedEvent<
  [string, string],
  PackageVerifyEventObject
>;

export type PackageVerifyEventFilter = TypedEventFilter<PackageVerifyEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface CannonRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CannonRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MIN_PACKAGE_NAME_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    acceptPackageOwnership(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<[string]>;

    getPackageNominatedOwner(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPackageUrl(
      _packageName: PromiseOrValue<BytesLike>,
      _packageVersionName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPackageVersions(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    nominateNewOwner(
      newNominatedOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatePackageOwner(
      _packageName: PromiseOrValue<BytesLike>,
      _newPackageOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    publish(
      _packageName: PromiseOrValue<BytesLike>,
      _packageVersionName: PromiseOrValue<BytesLike>,
      _packageTags: PromiseOrValue<BytesLike>[],
      _packageVersionUrl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceNomination(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    simulateUpgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unverifyPackage(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      _newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validatePackageName(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyPackage(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MIN_PACKAGE_NAME_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  acceptPackageOwnership(
    _packageName: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getImplementation(overrides?: CallOverrides): Promise<string>;

  getPackageNominatedOwner(
    _packageName: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPackageUrl(
    _packageName: PromiseOrValue<BytesLike>,
    _packageVersionName: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPackageVersions(
    _packageName: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  nominateNewOwner(
    newNominatedOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatePackageOwner(
    _packageName: PromiseOrValue<BytesLike>,
    _newPackageOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  publish(
    _packageName: PromiseOrValue<BytesLike>,
    _packageVersionName: PromiseOrValue<BytesLike>,
    _packageTags: PromiseOrValue<BytesLike>[],
    _packageVersionUrl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceNomination(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  simulateUpgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unverifyPackage(
    _packageName: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    _newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validatePackageName(
    _name: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyPackage(
    _packageName: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MIN_PACKAGE_NAME_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    acceptPackageOwnership(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getImplementation(overrides?: CallOverrides): Promise<string>;

    getPackageNominatedOwner(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPackageUrl(
      _packageName: PromiseOrValue<BytesLike>,
      _packageVersionName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPackageVersions(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    nominateNewOwner(
      newNominatedOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    nominatePackageOwner(
      _packageName: PromiseOrValue<BytesLike>,
      _newPackageOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    publish(
      _packageName: PromiseOrValue<BytesLike>,
      _packageVersionName: PromiseOrValue<BytesLike>,
      _packageTags: PromiseOrValue<BytesLike>[],
      _packageVersionUrl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceNomination(overrides?: CallOverrides): Promise<void>;

    simulateUpgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unverifyPackage(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      _newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validatePackageName(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyPackage(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnerChanged(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    "PackagePublish(bytes32,bytes32,bytes32[],string,address)"(
      name?: PromiseOrValue<BytesLike> | null,
      version?: PromiseOrValue<BytesLike> | null,
      tags?: PromiseOrValue<BytesLike>[] | null,
      url?: null,
      owner?: null
    ): PackagePublishEventFilter;
    PackagePublish(
      name?: PromiseOrValue<BytesLike> | null,
      version?: PromiseOrValue<BytesLike> | null,
      tags?: PromiseOrValue<BytesLike>[] | null,
      url?: null,
      owner?: null
    ): PackagePublishEventFilter;

    "PackageUnverify(bytes32,address)"(
      name?: PromiseOrValue<BytesLike> | null,
      verifier?: PromiseOrValue<string> | null
    ): PackageUnverifyEventFilter;
    PackageUnverify(
      name?: PromiseOrValue<BytesLike> | null,
      verifier?: PromiseOrValue<string> | null
    ): PackageUnverifyEventFilter;

    "PackageVerify(bytes32,address)"(
      name?: PromiseOrValue<BytesLike> | null,
      verifier?: PromiseOrValue<string> | null
    ): PackageVerifyEventFilter;
    PackageVerify(
      name?: PromiseOrValue<BytesLike> | null,
      verifier?: PromiseOrValue<string> | null
    ): PackageVerifyEventFilter;

    "Upgraded(address)"(implementation?: null): UpgradedEventFilter;
    Upgraded(implementation?: null): UpgradedEventFilter;
  };

  estimateGas: {
    MIN_PACKAGE_NAME_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    acceptPackageOwnership(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    getPackageNominatedOwner(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPackageUrl(
      _packageName: PromiseOrValue<BytesLike>,
      _packageVersionName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPackageVersions(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nominateNewOwner(
      newNominatedOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatePackageOwner(
      _packageName: PromiseOrValue<BytesLike>,
      _newPackageOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    publish(
      _packageName: PromiseOrValue<BytesLike>,
      _packageVersionName: PromiseOrValue<BytesLike>,
      _packageTags: PromiseOrValue<BytesLike>[],
      _packageVersionUrl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceNomination(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    simulateUpgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unverifyPackage(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      _newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validatePackageName(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyPackage(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MIN_PACKAGE_NAME_LENGTH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    acceptPackageOwnership(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPackageNominatedOwner(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPackageUrl(
      _packageName: PromiseOrValue<BytesLike>,
      _packageVersionName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPackageVersions(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nominateNewOwner(
      newNominatedOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatePackageOwner(
      _packageName: PromiseOrValue<BytesLike>,
      _newPackageOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publish(
      _packageName: PromiseOrValue<BytesLike>,
      _packageVersionName: PromiseOrValue<BytesLike>,
      _packageTags: PromiseOrValue<BytesLike>[],
      _packageVersionUrl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceNomination(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    simulateUpgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unverifyPackage(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      _newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validatePackageName(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyPackage(
      _packageName: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
