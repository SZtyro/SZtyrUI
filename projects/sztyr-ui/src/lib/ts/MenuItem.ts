export interface MenuItem {
  /**Mat icon reference */
  icon;
  /**Name of item. Compatible with translation */
  name;
  /**Childs of item */
  childs?:MenuItem[];
  /**Routerlink to follow on click*/
  routerLink?:String;
  isOpen?:boolean;
  isMouseOver?:boolean;
  extras?;
}
