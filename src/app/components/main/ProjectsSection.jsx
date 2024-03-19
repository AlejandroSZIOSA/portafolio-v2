export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const res = await fetch("api/projects/projects");
      const data = await res.json();
      //console.log(data);
      setProjects(data);
    }
    getProjects();
  }, []);

  return (
    <div className="py-14">
      <h2 className="text-center p-3">Projects</h2>
      <div className="flex flex-col gap-4">
        {projects.map((p) => {
          return <CardViewProject key={p.id} project={p} />;
        })}
      </div>
    </div>
  );
}
