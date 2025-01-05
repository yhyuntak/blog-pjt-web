import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode, useEffect, useState } from 'react';
import { CategoryChildDTO } from 'api/category/CategoryParentDTO.ts';

// width, height, color, 내용물 등을 props로 받아서 처리하면 되지않나?
interface IDropdownComponentProps {
  triggerElement: ReactNode;
  dropdownItems: CategoryChildDTO[];
}

const HeaderDropdownComponent = (props: IDropdownComponentProps) => {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        {props.triggerElement}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="z-50">
          {props.dropdownItems.map((item) => {
            return (
              <DropdownMenu.Item
                key={item.id}
                className="w-22 flex cursor-pointer justify-center rounded bg-gray-200 pl-1 pr-1 text-xl hover:bg-gray-300"
              >
                {item.name}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default HeaderDropdownComponent;
