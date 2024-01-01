import { Container, H1, H3, H5 } from "@/components";
import data from "@/components/data/dataCertificate";

export function Certificate() {
  return (
    <Container>
      <H1>Certificates</H1>
      <table className="w-full mt-[16px] border-separate border-spacing-y-6">
        <tr className="text-center">
          <td className="max-w-[10vw]">
            <H3>Title</H3>
          </td>
          <td>
            <H3>Year</H3>
          </td>
          <td>
            <H3>URL</H3>
          </td>
        </tr>
        {data.map(({ title, year, url }) => {
          return (
            <tr className="text-center border-2 border-secondary-200" key={title}>
              <td className="max-w-[10vw] items-center text-start">
                <H5>{title}</H5>
              </td>
              <td>
                <H5>{year}</H5>
              </td>
              <td>
                <H5>
                  <a href={url} className="hover:font-bold duration-300">
                    here
                  </a>
                </H5>
              </td>
            </tr>
          );
        })}
      </table>
    </Container>
  );
}

export default Certificate;
