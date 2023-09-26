import { fetchAllProjects } from '@/lib/actions';
import { ProjectInterface } from '@/common.types';
import ProjectCard from '@/components/ProjectCard';
import Categories from '@/components/Categories';
import { categoryFilters } from '@/constans';

type ProjectsSearch = {
    projectSearch: {
        edges: { node: ProjectInterface }[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        }
    }
}

type SearchParams = {
    category?: string | null;
}

type Props = {
    searchParams: SearchParams;
}

const Home = async ({ searchParams: { category } }: Props) => {
    const  data = await fetchAllProjects(category) as ProjectsSearch;

    const projectsToDisplay = data?.projectSearch?.edges || [];

    if (projectsToDisplay.length === 0) {
        return (
            <section className="flexStart flex-col paddings">
                Categories

                <p className="no-result-text text-center">No projects found, go create some first.</p>
            </section>
        )
    }

    return (
        <section className="flex-start flex-col paddings mb-16">
            <Categories />

            <section className="projects-grid">
                {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
                    <ProjectCard
                        key={node?.id}
                        id={node.id}
                        image={node?.image}
                        title={node?.title}
                        name={node?.createdBy?.name}
                        avatarUrl={node?.createdBy?.avatarUrl}
                        userId={node?.createdBy?.id}
                    />
                ))}
            </section>
        </section>
    )
};

export default Home;