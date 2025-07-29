import type { Solution } from "@/types/solutions";
import solutions from "@/data/solutions.json";

export async function getAllSolutions(): Promise<Solution[]> {
  return solutions;
}

export async function getSolutionByName(
  name: string
): Promise<Solution | undefined> {
  return solutions.find((solution) => solution.identifier === name);
}
