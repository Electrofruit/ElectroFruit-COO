import Web3Type from '../types/web3'

export interface BlockchainProperties {
    web3: Web3Type,
    demandLogicInstance: any,
    assetLogicInstance: any,
    matcherAccount: string
}