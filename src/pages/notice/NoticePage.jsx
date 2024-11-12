import React from 'react'
import NoticeCard from '../../components/notice/NoticeCard'

const NoticePage = () => {
  return (
    <div className='notice_page_container container'>
        <div className="notice_page_inner_container">
            <div className="notice_back_container">
                <div className="notice_title">
                    <p>알림창</p>
                </div>
                <div className="notice_scroll">
                    <NoticeCard />
                    <NoticeCard />
                    <NoticeCard />
                    <NoticeCard />
                    <NoticeCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoticePage