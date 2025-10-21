import { IBlock, IBlockData } from '@core/typings';

export function createBlock<T extends IBlockData>(block: {
  name: string;
  type: CustomBlocksType.CUSTOM_HTML;
  validParentType: (BasicType.PAGE)[];
  create: (payload) => {};
  render: ({ data, idx, mode }: { data: any; idx: any; mode: any }) => React.JSX.Element
}): IBlock<T> {
  return block;
}
