import Colors from "@/constants/Colors";
import { Product } from "@/types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const defaultPizzaImage =
	"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";

type ProductListItemProps = {
	product: Product;
};

function ProductListItem({ product }: ProductListItemProps) {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: product.image || defaultPizzaImage }}
				style={styles.image}
			/>
			<Text style={styles.title}>{product.name}</Text>
			<Text style={styles.price}>${product.price}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: "600",
		marginVertical: 10,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	price: {
		fontSize: 16,
		color: Colors.light.tint,
		fontWeight: "600",
	},
	image: {
		width: "100%",
		aspectRatio: 1,
	},
});

export default ProductListItem;
