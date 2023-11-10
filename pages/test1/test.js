export const getServerSideProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return {
      props: {
        user: user,
      },
    };
  };
  

export default function Page() {
    return '';
}