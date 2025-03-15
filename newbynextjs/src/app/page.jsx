import ClientComponent from "./components/ClientComponent";
import ServerComponent from "./components/ServerComponent";

export default function Home() {
  return(
    <div>
      <h1>آکادمی نسرین مختاری</h1>
      <ServerComponent />
      <ClientComponent />
    </div>
  )
}