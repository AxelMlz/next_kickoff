import { notFound } from "next/navigation";

export default function ReviewDetail({ params }: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
    if (parseInt(params.reviewId) > 100) {
        notFound();
        return null;  // Redirect to 404 page if reviewId is too high   
    }

    return (
        <h1>Review n°{params.reviewId} of product n°{params.productId} </h1>
    );
}
