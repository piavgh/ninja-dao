import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'

const bundleDrop = sdk.getBundleDropModule(
  '0x0a2980c59e891D73d51eaEEA76021008bb4FcA1f'
)

;(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Ninja Shuriken',
        description: 'This NFT will give you access to NinjaDAO!',
        image: readFileSync('scripts/assets/shuriken.jpg'),
      },
    ])
    console.log('✅ Successfully created a new NFT in the drop!')
  } catch (error) {
    console.error('failed to create the new NFT', error)
  }
})()
