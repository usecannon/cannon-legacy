// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Package extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Package entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Package entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Package", id.toString(), this);
    }
  }

  static load(id: string): Package | null {
    return changetype<Package | null>(store.get("Package", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get versions(): Array<string> {
    let value = this.get("versions");
    return value!.toStringArray();
  }

  set versions(value: Array<string>) {
    this.set("versions", Value.fromStringArray(value));
  }

  get verifiers(): Array<string> | null {
    let value = this.get("verifiers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set verifiers(value: Array<string> | null) {
    if (!value) {
      this.unset("verifiers");
    } else {
      this.set("verifiers", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Version extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("cannon_package", Value.fromString(""));
    this.set("url", Value.fromString(""));
    this.set("publisher", Value.fromString(""));
    this.set("added", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Version entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Version entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Version", id.toString(), this);
    }
  }

  static load(id: string): Version | null {
    return changetype<Version | null>(store.get("Version", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get cannon_package(): string {
    let value = this.get("cannon_package");
    return value!.toString();
  }

  set cannon_package(value: string) {
    this.set("cannon_package", Value.fromString(value));
  }

  get readme(): string | null {
    let value = this.get("readme");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set readme(value: string | null) {
    if (!value) {
      this.unset("readme");
    } else {
      this.set("readme", Value.fromString(<string>value));
    }
  }

  get cannonfile(): string | null {
    let value = this.get("cannonfile");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set cannonfile(value: string | null) {
    if (!value) {
      this.unset("cannonfile");
    } else {
      this.set("cannonfile", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get tags(): Array<string> | null {
    let value = this.get("tags");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tags(value: Array<string> | null) {
    if (!value) {
      this.unset("tags");
    } else {
      this.set("tags", Value.fromStringArray(<Array<string>>value));
    }
  }

  get keywords(): Array<string> | null {
    let value = this.get("keywords");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set keywords(value: Array<string> | null) {
    if (!value) {
      this.unset("keywords");
    } else {
      this.set("keywords", Value.fromStringArray(<Array<string>>value));
    }
  }

  get url(): string {
    let value = this.get("url");
    return value!.toString();
  }

  set url(value: string) {
    this.set("url", Value.fromString(value));
  }

  get publisher(): string {
    let value = this.get("publisher");
    return value!.toString();
  }

  set publisher(value: string) {
    this.set("publisher", Value.fromString(value));
  }

  get added(): BigInt {
    let value = this.get("added");
    return value!.toBigInt();
  }

  set added(value: BigInt) {
    this.set("added", Value.fromBigInt(value));
  }

  get dependents(): Array<string> | null {
    let value = this.get("dependents");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set dependents(value: Array<string> | null) {
    if (!value) {
      this.unset("dependents");
    } else {
      this.set("dependents", Value.fromStringArray(<Array<string>>value));
    }
  }

  get dependencies(): Array<string> | null {
    let value = this.get("dependencies");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set dependencies(value: Array<string> | null) {
    if (!value) {
      this.unset("dependencies");
    } else {
      this.set("dependencies", Value.fromStringArray(<Array<string>>value));
    }
  }

  get chains(): Array<string> | null {
    let value = this.get("chains");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set chains(value: Array<string> | null) {
    if (!value) {
      this.unset("chains");
    } else {
      this.set("chains", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Chain extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("chain_id", Value.fromBigInt(BigInt.zero()));
    this.set("version", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Chain entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Chain entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Chain", id.toString(), this);
    }
  }

  static load(id: string): Chain | null {
    return changetype<Chain | null>(store.get("Chain", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get chain_id(): BigInt {
    let value = this.get("chain_id");
    return value!.toBigInt();
  }

  set chain_id(value: BigInt) {
    this.set("chain_id", Value.fromBigInt(value));
  }

  get version(): string {
    let value = this.get("version");
    return value!.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get presets(): Array<string> {
    let value = this.get("presets");
    return value!.toStringArray();
  }

  set presets(value: Array<string>) {
    this.set("presets", Value.fromStringArray(value));
  }
}

export class Preset extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("chain", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Preset entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Preset entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Preset", id.toString(), this);
    }
  }

  static load(id: string): Preset | null {
    return changetype<Preset | null>(store.get("Preset", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get chain(): string {
    let value = this.get("chain");
    return value!.toString();
  }

  set chain(value: string) {
    this.set("chain", Value.fromString(value));
  }
}

export class Keyword extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Keyword entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Keyword entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Keyword", id.toString(), this);
    }
  }

  static load(id: string): Keyword | null {
    return changetype<Keyword | null>(store.get("Keyword", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get versions(): Array<string> | null {
    let value = this.get("versions");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set versions(value: Array<string> | null) {
    if (!value) {
      this.unset("versions");
    } else {
      this.set("versions", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class DependencyDependent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("dependency", Value.fromString(""));
    this.set("dependent", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DependencyDependent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DependencyDependent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DependencyDependent", id.toString(), this);
    }
  }

  static load(id: string): DependencyDependent | null {
    return changetype<DependencyDependent | null>(
      store.get("DependencyDependent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dependency(): string {
    let value = this.get("dependency");
    return value!.toString();
  }

  set dependency(value: string) {
    this.set("dependency", Value.fromString(value));
  }

  get dependent(): string {
    let value = this.get("dependent");
    return value!.toString();
  }

  set dependent(value: string) {
    this.set("dependent", Value.fromString(value));
  }
}

export class PackageKeyword extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("version", Value.fromString(""));
    this.set("keyword", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PackageKeyword entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PackageKeyword entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PackageKeyword", id.toString(), this);
    }
  }

  static load(id: string): PackageKeyword | null {
    return changetype<PackageKeyword | null>(store.get("PackageKeyword", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get version(): string {
    let value = this.get("version");
    return value!.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get keyword(): string {
    let value = this.get("keyword");
    return value!.toString();
  }

  set keyword(value: string) {
    this.set("keyword", Value.fromString(value));
  }
}
