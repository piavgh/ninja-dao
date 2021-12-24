import sdk from './1-initialize-sdk.js'

const bundleDrop = sdk.getBundleDropModule(
  '0x0a2980c59e891D73d51eaEEA76021008bb4FcA1f'
)

;(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory()
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 60_000,
      maxQuantityPerTransaction: 1,
    })

    await bundleDrop.setClaimCondition(0, claimConditionFactory)
    console.log(
      '✅ Sucessfully set claim condition on bundle drop ',
      bundleDrop.address
    )
  } catch (error) {
    console.error('Failed to set claim condition', error)
  }
})()
