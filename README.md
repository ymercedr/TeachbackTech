# Static, Protected and Private

The second terms are access modifiers that are supported when using TypeScript. They are very useful and their use is highly recommended since it helps preserve the security of the properties and methods within a class, which avoids them being used in unnecesary circumstances. In some cases they can even be used to control the access to important data that should not be breached outside of the intended scope. In TypeScript, the default type of modifier is public, but it is still best practice to state the type even though it is default.

Now let's dive a little bit deeper into each term for further understanding. The protected type cannot be accesed outside of their class scope, yet their attributes can be used or accesed by child classes when inheritance is seen. Similarly, private modifiers cannot be accessed outside of their designated class, but in this case not even subclasses are allowed to use those attributes. Finally, the term static pertains to something that does not change, in TypeScript and example of this is when you assign a type to a variable (number, string, boolean) this type remains the same and cannot take any input or value different from the established one.
