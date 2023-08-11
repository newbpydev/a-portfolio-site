import { useRouteError } from "react-router";

type ErrorCustomResponse = {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  message?: string;
  error: Error;
};
type CustError = ErrorCustomResponse;

//* COMPONENT: Error
export default function Error() {
  const error = useRouteError() as CustError;

  // output
  return (
    <div>
      <h1>Oops, something went wrong</h1>
      <p>{error.message ? error.message : error.data}</p>
    </div>
  );
}
