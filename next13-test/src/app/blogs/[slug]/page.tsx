interface IProps {
   params: { slug: string };
}

// or Dynamic metadata
export async function generateMetadata({ params }: IProps) {
   return {
      title: params.slug,
   };
}

const Page = ({ params }: IProps) => {
   return <div>{params.slug}</div>;
};

export default Page;
