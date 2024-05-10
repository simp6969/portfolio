import Image from "next/image";
import { useRouter } from "next/navigation";
export function Projects({ src, link, projectTitle }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(link);
      }}
      className="projects justify-center flex flex-col gap-[10px] duration-300 w-[200px] p-[20px] text-center h-[200px] border-2 border-[#323232] rounded-[20px]"
    >
      <Image
        className="rounded-[10px]"
        height={1500}
        width={2000}
        alt={projectTitle}
        src={src}
      />
      <p className="text-[16px]">{projectTitle}</p>
    </div>
  );
}
