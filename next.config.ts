import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],  // o specificare domini precisi
      bodySizeLimit: "2mb"    // o il limite che preferisci
    }
  }
}

export default config
