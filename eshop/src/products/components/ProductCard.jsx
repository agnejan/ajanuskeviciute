import Card from "../../common/components/Card";
import Button from "../../common/components/Button";

function ProductCard({ id, image, title, price }) {
  return (
    <li className="p-3">
      <Card className="w-64 h-80" isRounded>
        <div className="h-3/4 flex">
          <img src={image} alt={title} className="max-h-full m-auto" />
        </div>
        <div className=" text-center font-semibold truncate mt-3" title={title}>
          {title}
        </div>
        <div className="text-center text-md">{price}$</div>

        <div className="text-center">
          <Button
            to={`/products/${id}`}
            className="text-purple-500 hover:text-green-400 text-sm"
          >
            VIEW
          </Button>
        </div>
      </Card>
    </li>
  );
}

export default ProductCard;
