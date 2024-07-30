export default function ProductDetils(
    { params }: {
        params: {productId: string}
    }) {
    return <h1>Details about the product for {params.productId}</h1>
}