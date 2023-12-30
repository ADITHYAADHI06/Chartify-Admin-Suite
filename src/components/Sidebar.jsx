import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { UseStateContext } from '../contexts/contextProvider';

const Sidebar = () => {

  const { ActiveMenu } = UseStateContext();


  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {
        ActiveMenu && (
          <>
            <div className="flex justify-between items-center">
              <Link to="/" className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                <SiShopware /> <span>Shoppy</span>
              </Link>
              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  type="button"
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>

            <div className='mt-10'>
              {
                links.map((item, i) => {
                  return (
                    <div key={item.title}>
                      <p>{item.title}</p>
                      {
                        item.links.map((link) => {
                          return (
                            <NavLink to={link.name} key={link.name} className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg'
                            >
                              {link.icon}
                              < span className="capitalize " > {link.name}</span>
                            </NavLink>
                          )
                        })
                      }
                    </div>

                  )
                })
              }
            </div>



          </>
        )
      }
    </div >
  )
}

export default Sidebar