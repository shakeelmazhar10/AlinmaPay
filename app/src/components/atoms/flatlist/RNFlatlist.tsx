import React from 'react';
import { FlatList, FlatListProps, ViewStyle } from 'react-native';
import styles from './RNFlatlist.style';

/**
 * Props for the RNFlatlist component.
 */
interface RNFlatlistProps<T> extends Omit<FlatListProps<T>, 'renderItem'> {
  /**
   * Style for the container of the flatlist.
   */
  style?: ViewStyle;
  /**
   * Function to render each item of the flatlist.
   * @param {T} item - The item to render.
   * @returns {React.ReactElement<any>} - The rendered element for the item.
   */
  renderItem: (item: T) => React.ReactElement<any>;
  /**
   * Custom refresh control element.
   */
  refreshControl?: React.ReactElement;
  /**
   * If true, renders the flatlist horizontally.
   */
  horizontal?: boolean;
}

/**
 * A customizable flatlist component.
 * @param {RNFlatlistProps<T>} props - The props for the RNFlatlist component.
 * @returns {JSX.Element} - The rendered component.
 * @template T - The type of data items in the flatlist.
 */
const RNFlatlist = <T extends any>({
  style,
  data,
  renderItem,
  refreshControl,
  horizontal,
  ...rest
}: RNFlatlistProps<T>): JSX.Element => {
  return (
    <FlatList
      style={[styles.mainContainer, style]}
      data={data}
      renderItem={({ item }) => renderItem(item)} // Pass the item to the renderItem function
      keyExtractor={(item, index) => index.toString()}
      refreshControl={refreshControl}
      horizontal={horizontal}
      {...rest} // Pass any additional props to FlatList
    />
  );
};

export default RNFlatlist;
