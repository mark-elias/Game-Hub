import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skel) => (
            <GameCardContainer>
              <GameCardSkeleton key={skel}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer>
            <GameCard key={g.id} game={g}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
