type Props = {
    params: {
        blogId: string;
    };
};

export default function BlogDetail({ params }: Props) {
    return (
        <h1>{params.blogId} Blogs</h1>
    );
}