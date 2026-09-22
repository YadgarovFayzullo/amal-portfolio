import type { Case, CaseSlug } from "../types";
import { finarum } from "./finarum";
import { hammersmith } from "./hammersmith";
import { ipotekaBank } from "./ipoteka-bank";
import { maryAi } from "./mary-ai";
import { qrtifact } from "./qrtifact";
import { remoutly } from "./remoutly";
import { uzumBank } from "./uzum-bank";

/** Порядок кейсов на сайте и в навигации «предыдущий / следующий». */
export const cases: Case[] = [maryAi, finarum, ipotekaBank, hammersmith, qrtifact, uzumBank, remoutly];

/** Сколько карточек видно на главной до «Показать все проекты». */
export const featuredCount = 6;

export const getCase = (slug: string) => cases.find((item) => item.slug === slug);

export function getNeighbours(slug: CaseSlug) {
  const index = cases.findIndex((item) => item.slug === slug);
  return { prev: cases[index - 1], next: cases[index + 1] };
}
