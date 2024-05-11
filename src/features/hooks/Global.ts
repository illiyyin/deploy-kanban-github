
import { Modal } from '../../types'


interface useGlobalActionType {
  updateMenu: (menuOpenId: number) => void
  updateModal: (body: Modal) => void
}

export const useGlobalAction = (): useGlobalActionType => {

  const updateMenu = (): void => {

  }

  const updateModal = (): void => {

  }

  return {
    updateModal,
    updateMenu,
  }
}
