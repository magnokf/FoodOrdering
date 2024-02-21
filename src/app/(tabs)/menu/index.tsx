import ProductListItem from "@/components/ProductListItem";
import { FlatList } from "react-native";
import products from "../../../../assets/data/products";

export default function MenuScreen({}) {
	return (
		<FlatList
			data={products}
			renderItem={({ item }) => <ProductListItem product={item} />}
			keyExtractor={(item) => item.id.toString()}
			numColumns={2}
			contentContainerStyle={{
				gap: 10,
			}}
			columnWrapperStyle={{
				gap: 10,
			}}
		/>
	);
}
