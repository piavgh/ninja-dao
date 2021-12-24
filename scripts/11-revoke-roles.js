import sdk from './1-initialize-sdk.js'

const tokenModule = sdk.getTokenModule(
  '0x878aCdcACF14DC0A11698b08dE03D1756DF9e978'
)

;(async () => {
  try {
    // Log the current roles.
    console.log(
      '👀 Roles that exist right now:',
      await tokenModule.getAllRoleMembers()
    )

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await tokenModule.revokeAllRolesFromAddress(
      '0x1caA943b821B1d9A2d98518A0F8eAA4fb968e9cb'
    )
    console.log(
      '🎉 Roles after revoking ourselves',
      await tokenModule.getAllRoleMembers()
    )
    console.log(
      '✅ Successfully revoked our superpowers from the ERC-20 contract'
    )
  } catch (error) {
    console.error('Failed to revoke ourselves from the DAO treasury', error)
  }
})()
