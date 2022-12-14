import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Nav"
import Footer from "../Components/Footer"

function Category() {
  return (
    <>
    <Navbar/>
    
      <div className="logo">
        {/* link with home page  */}

        <h1>Breakfast Menu</h1>

        <h3>See Category</h3>

        <Image src="/porota.jpg" width={300} height={200} />
        <p>
          <b>Porota</b>
        </p>

        <button className="btn p+20">
          {" "}
          <Link href="/gateway">Purchase</Link>
        </button>
        <button className="btn p+20">Add [+]</button>
        <br />
        <br />

        <Image src="/sobji.jpg" width={300} height={200} />
        <p>
          <b>Sobji</b>
        </p>

        <button className="btn p+20">
          <Link href="/gateway">Purchase</Link>
        </button>
        <button className="btn p+20">Add [+]</button>
        <br />
        <br />
        <Image src="/water.jpg"  width={300} height={200} />
        <p>
          <b>Water</b>
        </p>

        <button className="btn p+20">
          <Link href="/gateway">Purchase</Link>
        </button>
        <button className="btn p+20"> Add [+]</button>
        <br />
        <br />
      </div>
      <Footer/>
    </>
  );
}

export default Category;
