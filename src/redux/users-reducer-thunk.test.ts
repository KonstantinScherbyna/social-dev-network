import { usersAPI } from "../api/users-api"
import { ResultCodesEnum } from "../types/types"
import { followThunk, toggleFollowingProgress } from "./users-reducer-slice"
jest.mock("../api/api")

const userAPIMock = usersAPI

const result = {
    data: {},
    resultCode: ResultCodesEnum.Success,
    messages: []
}

// userAPIMock.followThunk.mockReturnValue(result)
//@ts-ignore
userAPIMock.addUserSubscribe.mockReturnValue(Promise.resolve(result))

test('reducerAddSubscribe', async () => {
    const thunk = followThunk(1)

    const dispatchMock = jest.fn()

    //@ts-ignore
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress({ isFetch: true, id: 1 }))
})