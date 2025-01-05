import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { postApi } from 'api/index.ts';
import { PostDTO } from 'api/post/postDTO.ts';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Markdown from 'react-markdown';

const PostDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<PostDTO>();

  const getPost = useCallback(async () => {
    if (!id) {
      // todo : 해당 포스트가 없을 때 에러 처리 아마 화면 전환해야할 듯.
      // todo : 에러 모달 띄우기
      navigate('/');
      return;
    }
    const data = await postApi.getPost(id);
    setPost(data);
  }, [id]);

  const handleEdit = useCallback(() => {
    navigate('/write', { state: { post } });
  }, [post]);

  const handleDelete = useCallback(async () => {
    // todo : 삭제 확인 모달 띄우기
    if (!id) {
      // todo : 해당 포스트가 없을 때 에러 처리 아마 화면 전환해야할 듯.
      // todo : 에러 모달 띄우기
      navigate('/');
      return;
    }
    await postApi.deletePost(id);
    // todo : 삭제 성공 모달 띄우기
    navigate('/');
  }, [post]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <main className="flex h-full w-auto flex-col border">
        <div className="flex items-center justify-between p-4">
          <div className="w-full text-4xl font-bold"> {post?.title} </div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl hover:bg-gray-100">
                <EllipsisVerticalIcon className="h-6 w-6" />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              className="min-w-2 rounded-lg bg-gray-200 p-2 shadow-lg"
              sideOffset={5}
            >
              <DropdownMenu.Item
                className="user-select-none cursor-pointer"
                onSelect={handleEdit}
              >
                수정
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="user-select-none cursor-pointer"
                onSelect={handleDelete}
              >
                삭제
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <div className="mx-4 w-[47.5rem] border" />
        <div className="w-full overflow-y-auto">
          <Markdown className="prose" children={post?.content || ''} />
        </div>
        <aside className="md:none fixed right-0 hidden h-full w-56 border xl:block">
          우측 사이드바
        </aside>
      </main>
    </>
  );
};

export default PostDetailPage;
