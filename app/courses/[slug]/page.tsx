import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import Navbar from "@/components/Navbar";
import CourseDetail from "@/components/CourseDetail";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();

  return (
    <>
      <Navbar />
      <CourseDetail course={course} />
    </>
  );
}
