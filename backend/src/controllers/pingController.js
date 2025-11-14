import { getPingModelo } from '../models/pingModel.js'

const getPingController = async (req, res) => {
  try {
    const result = await getPingModelo()
    console.log(result)
    res.json('ping')
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export { getPingController }
