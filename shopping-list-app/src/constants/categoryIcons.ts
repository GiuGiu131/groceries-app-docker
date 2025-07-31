import BakeryIcon from "../../assets/svgs/bakery-icon.svg";
import BeveragesIcon from "../../assets/svgs/beverages-icon.svg";
import FruitIcon from "../../assets/svgs/fruit-icon.svg";
import DairyIcon from "../../assets/svgs/dairy-icon.svg";
import MeatIcon from "../../assets/svgs/meat-icon.svg";
import FishIcon from "../../assets/svgs/fish-icon.svg";
import PantryIcon from "../../assets/svgs/pantry-icon.svg";
import VegetableIcon from "../../assets/svgs/vegetable-icon.svg";

export const categoryIcons: Record<string, React.FC<any>> = {
  Bakery: BakeryIcon,
  Beverages: BeveragesIcon,
  Fruits: FruitIcon,
  Dairy: DairyIcon,
  Meat: MeatIcon,
  Fishs: FishIcon,
  Pantry: PantryIcon,
  Vegetables: VegetableIcon
};

export const getIconForCategory = (category?: string | null) => (category && categoryIcons[category] ? categoryIcons[category] : PantryIcon);
