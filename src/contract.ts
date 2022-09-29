import { BigInt } from "@graphprotocol/graph-ts";
import {
  Contract,
  Approval,
  ApprovalForAll,
  Expelled,
  Nested,
  OwnershipTransferred,
  Paused,
  Refund,
  Revenue,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer,
  Unnested,
  Unpaused,
} from "../generated/Contract/Contract";
import { NestedEntity } from "../generated/schema";

// export function handleApproval(event: Approval): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = Token.load(event.transaction.from.toHex());

//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   if (!entity) {
//     entity = new Token(event.transaction.from.toHex());

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0);
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1);

//   // Entity fields can be set based on event parameters
//   entity.owner = event.params.owner;
//   entity.approved = event.params.approved;

// Entities can be written to the store with `.save()`
// entity.save();

// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.DEFAULT_ADMIN_ROLE(...)
// - contract.EXPULSION_ROLE(...)
// - contract.alreadyMinted(...)
// - contract.balanceOf(...)
// - contract.baseTokenURI(...)
// - contract.beneficiary(...)
// - contract.cost(...)
// - contract.getApproved(...)
// - contract.getRoleAdmin(...)
// - contract.getRoleMember(...)
// - contract.getRoleMemberCount(...)
// - contract.hasRole(...)
// - contract.isApprovedForAll(...)
// - contract.name(...)
// - contract.nestingOpen(...)
// - contract.nestingPeriod(...)
// - contract.owner(...)
// - contract.ownerOf(...)
// - contract.paused(...)
// - contract.price(...)
// - contract.proof(...)
// - contract.proofClaimsRemaining(...)
// - contract.proofMintingOpen(...)
// - contract.proofPoolRemaining(...)
// - contract.renderingContract(...)
// - contract.royaltyInfo(...)
// - contract.sellerConfig(...)
// - contract.supportsInterface(...)
// - contract.symbol(...)
// - contract.tokenURI(...)
// - contract.totalSold(...)
// - contract.totalSupply(...)
// - contract.usedMessages(...)
// }

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleExpelled(event: Expelled): void {}

export function handleNested(event: Nested): void {
  // Create a unique ID that refers to this listing
  // The NFT Contract Address + Token ID + Seller Address can be used to uniquely refer
  // to a specific listing
  const id =
    event.params.tokenId.toString() +
    "-" +
    event.transaction.from.toHex() +
    "-" +
    event.transaction.hash.toHex();

  let nesting = new NestedEntity(id);

  nesting.tokenID = event.params.tokenId;

  nesting.from = event.transaction.from;

  nesting.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleRefund(event: Refund): void {}

export function handleRevenue(event: Revenue): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnnested(event: Unnested): void {}

export function handleUnpaused(event: Unpaused): void {}
