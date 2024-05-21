import Image from "next/image";

export default function Home () {
  return (
    <div className='flex flex-col gap-y-4 font-poppins items-center justify-center mx-[14vw] lg:mx-auto dark:bg-gray-900 max-w-screen min-h-screen'>
      <h1 className='text-5xl'>Homepage</h1>
      <p className='text-lg'>This is not a protected route</p>
    </div>
  );
}
