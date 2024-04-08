import { v4 as uuid } from 'uuid'

export const getShortUUID = (): string => uuid().split('-')[0]
