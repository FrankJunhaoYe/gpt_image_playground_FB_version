import { readRuntimeEnv } from './runtimeEnv'

export const FRANKLYBUILDS_API_BASE_URL = 'https://franklybuilds.com'

const RAW_LOCK_API_CONFIG = readRuntimeEnv(import.meta.env.VITE_FRANKLYBUILDS_LOCK_API_CONFIG)

// FranklyBuilds 定制版默认锁定 API 配置；设置为 false 可在开发或维护时临时恢复编辑。
export const FRANKLYBUILDS_API_CONFIG_LOCKED = RAW_LOCK_API_CONFIG !== 'false'
