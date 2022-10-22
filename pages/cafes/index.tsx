import { prisma } from "../utils/prisma";
import { ReactElement, useState } from "react";
import Cafe from "../../components/cafes/Cafe";
import Navbar from "../../components/cafes/Navbar";

export default function Cafes(props: { shops: CoffeeShop[] }): ReactElement {
  const [search, setSearch] = useState("");
  const [quiet, setQuiet] = useState("");
  const [wifi, setWifi] = useState("");
  const [coffee, setCoffee] = useState("");
  const [tea, setTea] = useState("");
  const [outlets, setOutlets] = useState("");

  
  return (
    <>
      <Navbar />
      <div style={{marginTop: "1rem"}}>
      <input
        style={{marginLeft: "4rem"}}
        className="border border-black px-2 py-2 rounded-md"
        placeholder="Search Cafes"
        onChange={(e) => setSearch(e.target.value)}
      />

      
      <label style={{marginLeft: "1rem"}} htmlFor="quietselect">Quiet: </label>
      <select  id="quietselect"
      className="border border-black px-2 py-2 rounded-md"
      placeholder="Filter Quiet"
      onChange={(e) => setQuiet(e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
      </select>

      <label style={{marginLeft: "1rem"}} htmlFor="outletselect">Outlet: </label>
      <select
        id = "outletselect"
        className="border border-black px-2 py-2 rounded-md"
        placeholder="Filter Wifi"
        onChange={(e) => setOutlets(e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
      </select>

    <label style={{marginLeft: "1rem"}} htmlFor="wifiselect">Wifi: </label>
      <select
        className="border border-black px-2 py-2 rounded-md"
        placeholder="Filter Wifi"
        onChange={(e) => setWifi(e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
      </select>

      <label style={{marginLeft: "1rem"}} htmlFor="coffeeselect">Coffee: </label>
      <select
        className="border border-black px-2 py-2 rounded-md"
        placeholder="Filter Coffee"
        onChange={(e) => setCoffee(e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
      </select>

    <label style={{marginLeft: "1rem"}} htmlFor="teaselect">Tea: </label>
      <select
        className="border border-black px-2 py-2 rounded-md"
        placeholder="Filter Tea"
        onChange={(e) => setTea(e.target.value)}
      >
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
    </div>

      <div className="flex justify-center items-center mx-16">
        <div className="flex flex-wrap">
          {props.shops
            .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
            .filter((s) => s.quiet >= quiet)
            .filter((s) => s.wifi >= wifi)
            .filter((s) => s.coffee >= coffee)
            .filter((s) => s.outlets >= outlets)
            .filter((s) => s.tea >= tea)
            .map((cafe) => (
              <Cafe key={cafe.id} id={cafe.id} name={cafe.name} address={cafe.address} img={ cafe.imgUrl } />
            ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const shops = await prisma.coffeeShop.findMany();

  return {
    props: { shops },
  };
}