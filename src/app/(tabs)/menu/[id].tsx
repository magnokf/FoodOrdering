import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const sizes = ["Média", "Grande", "Família"];

const ProductDetailsScreen = () => {
	const { id } = useLocalSearchParams();
	const product = products.find((product) => product.id.toString() === id);

	const [selectedSize, setSelectedSize] = useState(sizes[0]);
	const [selectedPrice, setSelectedPrice] = useState(product?.prices[0]);

	const addToCart = () => {
		if (!product) return;
		console.warn("Add to cart");
	};

	const handleSelectSize = (size: string) => {
		setSelectedSize(size);
		const price = product?.prices.find((price) => price.sizes === size);
		if (price) {
			setSelectedPrice(price);
		}
	};

	if (!product) {
		return <Text>Item não encontrado</Text>;
	}
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: `${product.name}` }} />
			<Image
				source={{ uri: product.image || defaultPizzaImage }}
				style={styles.image}
			/>
			<Text style={styles.title}>{product.name}</Text>

			<Text>Escolha o Tamanho</Text>
			<View style={styles.sizes}>
				{sizes.map((size) => (
					<Pressable
						key={size}
						onPress={() => {
							handleSelectSize(size);
						}}
						style={[
							styles.size,
							{
								backgroundColor: selectedSize === size ? "gainsboro" : "white",
							},
						]}>
						<Text
							style={[
								styles.sizeText,
								{
									color: selectedSize === size ? "black" : "gray",
								},
							]}>
							{size}
						</Text>
					</Pressable>
				))}
			</View>
			<Text style={styles.price}>R$ {selectedPrice?.price}</Text>

			<Button onPress={addToCart} text="COLOCAR NO CARRINHO" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		padding: 10,
	},
	image: {
		width: "100%",
		aspectRatio: 1,
		resizeMode: "cover",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	price: {
		fontSize: 18,
		fontWeight: "bold",
		color: "green",
		marginTop: "auto",
	},
	size: {
		fontSize: 18,
		backgroundColor: "gainsboro",
		width: 80,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	sizes: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 10,
	},
	sizeText: {
		fontSize: 20,
		fontWeight: "500",
	},
});

export default ProductDetailsScreen;
