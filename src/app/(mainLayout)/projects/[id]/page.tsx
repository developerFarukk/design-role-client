

const ProjectDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    console.log(id);
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL_SERVER}/api/projects/${id}`);
    const project = await res.json();

    console.log(project);
    

    return (
        <div>
            <div> The Component is Start ProjectDetailPage </div>
        </div>
    );
};

export default ProjectDetailPage;
