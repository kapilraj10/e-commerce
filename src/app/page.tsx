import Container from "@/components/Container";
import { Button } from "@/components/ui/button"
const Home =()=>{
  return (
  <Container className="p-10 bg-shop-light-pink">
   <h1 className="text-xl font-semibold">Home</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae debitis, atque, corporis, hic quaerat vitae explicabo eos fugit necessitatibus ex temporibus quidem! Non ratione perferendis maiores? Fuga, dolore quae!</p>
  <Button >Click Me</Button>
  </Container>
  );
};

export default Home;