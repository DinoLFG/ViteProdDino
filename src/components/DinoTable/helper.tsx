export enum apiPath {
    transactions = 'transactions',
    nft = 'nft',
    burn = 'burn',
    staking = 'staking',
}

export const checkHeaderTitle = (byApiPath: string) => {
    switch(byApiPath){
        case apiPath.transactions:
            return 'Total ETH'
        case apiPath.nft:
            return 'Total NFT'
        case apiPath.burn:
            return 'Total DINO'
        case apiPath.staking:
            return 'Total DINO'
        default:
    }
}

export const checkSubHeaderTitle = (byApiPath: string) => {
    switch(byApiPath){
        case apiPath.transactions:
            return 'Total Value'
        case apiPath.nft:
            return 'ID'
        case apiPath.burn:
            return 'Total Value'
        case apiPath.staking:
            return 'Total Value'
        default:
    }
}

export const roundingHeaders = (byApiPath: string, byWalletAddress: string) => {
    switch(byApiPath){
        case apiPath.transactions:
            return Number(byWalletAddress).toFixed(3)
        case apiPath.nft:
            return Number(byWalletAddress).toFixed(0)
        case apiPath.burn:
            return Number(byWalletAddress).toFixed(1)
        case apiPath.staking:
            return Number(byWalletAddress).toFixed(1)
        default:
    }
}

export const rounding = (byApiPath: string, byWalletAddress: string) => {
    switch(byApiPath){
        case apiPath.transactions:
            return Number(byWalletAddress).toFixed(5)
        case apiPath.nft:
            return Number(byWalletAddress).toFixed(0)
        case apiPath.burn:
            return Number(byWalletAddress).toFixed(3)
        case apiPath.staking:
            return Number(byWalletAddress).toFixed(3)
        default:
    }
}